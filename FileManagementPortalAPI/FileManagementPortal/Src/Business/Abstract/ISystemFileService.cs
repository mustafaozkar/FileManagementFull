using Entities.Concrete;
using Entities.Dtos;
using ResultsNetStandard.Abstract;
using ResultsNetStandard.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface ISystemFileService
    {
        IListDataResult<SystemFile> GetAll();
        ISingleDataResult<SystemFile> GetBySystemFileId(int fileId);
        IListDataResult<SystemFile> GetByUserSystemFileId(int userId);
        IListDataResult<SystemFileDto> GetByUserEmail(string email);

        IResult Add(UserForSystemFile userForSystemFile);
        IResult Delete(SystemFile systemFile);
        IResult Update(SystemFile systemFile);
    }
}
