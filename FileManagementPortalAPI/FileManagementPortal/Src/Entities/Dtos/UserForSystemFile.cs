using Core.Entities.Abstract;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Dtos
{
    public class UserForSystemFile : IDto
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public IFormFile SystemFile { get; set; }
    }
}
