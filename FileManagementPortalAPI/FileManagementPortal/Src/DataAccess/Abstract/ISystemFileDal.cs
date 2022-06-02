using Core.DataAccess.Abstract;
using Entities.Concrete;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace DataAccess.Abstract
{
    public interface ISystemFileDal : IEntityRepository<SystemFile>
    {
        List<SystemFileDto> GetDtos(Expression<Func<SystemFileDto,bool>> filter = null);
    }
}
