using Business.Abstract;
using Entities.Concrete;
using Entities.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SystemFilesController : ControllerBase
    {
        private readonly ISystemFileService _systemFileService;

        public SystemFilesController(ISystemFileService systemFileService)
        {
            _systemFileService = systemFileService;
        }

        [HttpPost("upload")]
        public IActionResult Upload([FromForm] int userId,[FromForm] IFormFile file)
        {
            var userForSystemFile = new UserForSystemFile()
            {
                Name = "hidden",
                Description = "hidden",
                SystemFile = file,
                UserId = userId
            };

            var result = _systemFileService.Add(userForSystemFile);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpDelete("delete")]
        public IActionResult Delete([FromBody] SystemFile systemFile)
        {
            var result = _systemFileService.Delete(systemFile);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPut("update")]
        public IActionResult Update([FromBody] SystemFile systemFile)
        {
            var result = _systemFileService.Update(systemFile);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("get-all")]
        public IActionResult GetAll()
        {
            var result = _systemFileService.GetAll();
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getby-system-file-id/{fileId}")]
        public IActionResult GetBySystemFileId(int fileId)
        {
            var result = _systemFileService.GetBySystemFileId(fileId);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("get-by-user-id/{userId}")]
        public IActionResult GetByUserId(int userId)
        {
            var result = _systemFileService.GetByUserSystemFileId(userId);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("get-by-user-email/{email}")]
        public IActionResult GetByUserId(string email)
        {
            var result = _systemFileService.GetByUserEmail(email);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
