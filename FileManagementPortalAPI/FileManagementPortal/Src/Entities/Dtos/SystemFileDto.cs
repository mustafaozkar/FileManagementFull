using Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Dtos
{
    public class SystemFileDto : IDto
    {
        public int FileId { get; set; }
        public int UserId { get; set; }
        public string UserEmail { get; set; }

        public string FileName { get; set; }
        public string FileDescription { get; set; }
        public string FileType { get; set; }
        public string FileDirectoryPath { get; set; }
        public string FileFullDirectoryPath { get; set; }
    }
}
