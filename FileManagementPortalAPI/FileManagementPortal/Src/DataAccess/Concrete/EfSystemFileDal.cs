using Core.DataAccess.Concrete;
using DataAccess.Abstract;
using DataAccess.Contexts;
using Entities.Concrete;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;

namespace DataAccess.Concrete
{
    public class EfSystemFileDal : EfEntityRepositoryBase<SystemFile, FileManagementDbContext>, ISystemFileDal
    {
        public List<SystemFileDto> GetDtos(Expression<Func<SystemFileDto, bool>> filter = null)
        {
            using (FileManagementDbContext context = new FileManagementDbContext())
            {
                var join = from file in context.Files
                           join user in context.Users
                           on file.UserId equals user.Id
                           select new SystemFileDto()
                           {
                               FileId = file.Id,
                               UserId = user.Id,
                               UserEmail = user.Email,
                               
                               FileName = file.Name,
                               FileDescription = file.Description,
                               FileType = file.Type,
                               FileDirectoryPath = file.DirectoryPath,
                               FileFullDirectoryPath = file.FullDirectoryPath
                           };
                return filter == null ? join.ToList() : join.Where(filter).ToList();
            }
        }
    }
}
