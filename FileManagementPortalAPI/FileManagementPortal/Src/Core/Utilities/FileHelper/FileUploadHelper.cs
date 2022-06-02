using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Core.Utilities.FileHelper
{
    public static class FileUploadHelper
    {
        private static string BaseDirectoryPath => (Environment.CurrentDirectory + "\\wwwroot\\");
        public static UploadedFile Upload(IFormFile file, string directoryPath)
        {

            CheckDirectoryExists(directoryPath);

            string fileType = GetFileType(file.FileName);
            string fileName = GetNewFileName() + fileType;
            string defaultDirectoryPath = directoryPath + fileName;
            string fullDirectoryPath = (BaseDirectoryPath + defaultDirectoryPath);

            UploadFile(fullDirectoryPath, file);
            return new UploadedFile() 
            {
                Name = fileName,
                Type = fileType,
                FullDirectoryPath = fullDirectoryPath,
                DirectoryPath = defaultDirectoryPath,
                CreatedDate = DateTime.UtcNow
            };

        }

        private static void UploadFile(string directory, IFormFile file)
        {
            using (FileStream fileStream = File.Create(directory))
            {
                file.CopyTo(fileStream);
                fileStream.Flush();
            }
        }

        private static string GetNewFileName()
        {
            return Guid.NewGuid().ToString();
        }

        private static string GetFileType(string fileName)
        {
            return Path.GetExtension(fileName);
        }

        private static void CheckDirectoryExists(string directory)
        {
            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }
        }

        public static void CreateDirectory(string directory)
        {
            Directory.CreateDirectory(BaseDirectoryPath + "files" + "\\" + directory);
        }
    }
}
