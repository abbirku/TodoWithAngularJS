using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoWithAngularJs.Models
{
    public class TodoItem
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public string TodoDescription { get; set; }

        public bool IsComplete { get; set; }
    }
}
