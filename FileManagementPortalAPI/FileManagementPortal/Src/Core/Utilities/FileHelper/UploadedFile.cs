using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.FileHelper
{
    public class UploadedFile
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string FullDirectoryPath { get; set; }
        public string DirectoryPath { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
