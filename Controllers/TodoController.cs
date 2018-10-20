using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodoWithAngularJs.DatabaseContext;
using TodoWithAngularJs.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TodoWithAngularJs.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private readonly TodoDBContext _context;

        public TodoController(TodoDBContext context)
        {
            this._context = context;

            if (_context.TodoItems.Count() == 0)
            {
                var todo = new TodoItem
                {
                    Name = "Take medicine",
                    TodoDescription = "Take the Valoate CR 500 medicine at night.",
                    IsComplete = false
                };

                _context.Add(todo);
                _context.SaveChanges();
            }
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult GetAllTodo()
        {
            try
            {
                var result = _context.TodoItems.ToList();
                return Json(new { success = true, data = result });
            }
            catch (Exception ex)
            {
                return Json(new { success = true, data = ex.Message });
            }

        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public ActionResult GetTodoById(int id)
        {
            try
            {
                var record = _context.TodoItems.Where(x => x.Id == id).FirstOrDefault();
                if (record == null)
                {
                    return NotFound();
                }

                return Json(new { success = true, data = record });
            }
            catch (Exception ex)
            {
                return Json(new { success = true, data = ex.Message });
            }
        }

        // POST api/<controller>
        [HttpPost]
        public ActionResult PostTodo([FromBody] TodoItem item)
        {
            try
            {
                _context.TodoItems.Add(item);
                _context.SaveChanges();

                return Json(new { success = true, data = "Todo added successfully" });
            }
            catch (Exception ex)
            {
                return Json(new { success = true, errorMessage = ex.Message });
            }
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public ActionResult UpdateTodo(int id, [FromBody]TodoItem item)
        {
            try
            {
                var record = _context.TodoItems.Where(x => x.Id == id).FirstOrDefault();
                if (record == null)
                {
                    return NotFound();
                }

                record.IsComplete = item.IsComplete;
                record.Name = item.Name;
                record.TodoDescription = item.TodoDescription;

                _context.TodoItems.Update(record);
                _context.SaveChanges();

                return Json(new { success = true, data = "Todo update successful" });
            }
            catch (Exception ex)
            {
                return Json(new { success = true, errorMessage = ex.Message });
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public ActionResult DeleteTodo(int id)
        {
            try
            {
                var data = _context.TodoItems.Where(x => x.Id == id).FirstOrDefault();
                if (data == null)
                {
                    return NotFound();
                }

                _context.TodoItems.Remove(data);
                _context.SaveChanges();

                return Json(new { success = true, data = "Todo is deleted" });
            }
            catch (Exception ex)
            {
                return Json(new { success = true, errorMessage = ex.Message });
            }
        }
    }
}
