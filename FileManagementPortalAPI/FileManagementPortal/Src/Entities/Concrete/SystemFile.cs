using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class SystemFile : BaseEntity
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string DirectoryPath { get; set; }
        public string FullDirectoryPath { get; set; }
    }
}
