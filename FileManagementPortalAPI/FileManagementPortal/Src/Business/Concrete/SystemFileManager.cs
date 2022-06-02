using Business.Abstract;
using Core.Constants;
using Core.Utilities.FileHelper;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.Dtos;
using Results.State;
using ResultsNetStandard.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class SystemFileManager : ISystemFileService
    {
        private readonly ISystemFileDal _systemFileDal;

        public SystemFileManager(ISystemFileDal systeMFileDal)
        {
            _systemFileDal = systeMFileDal;
        }

        public IResult Add(UserForSystemFile userForSystemFile)
        {
            var fileUpload = FileUploadHelper.Upload(userForSystemFile.SystemFile, "files\\");
            _systemFileDal.Add(new SystemFile()
            {
                Name = fileUpload.Name,
                Type = fileUpload.Type,
                IsApproved = true,
                UserId = userForSystemFile.UserId,
                Description = userForSystemFile.Description,
                DirectoryPath = fileUpload.DirectoryPath.Replace('\\', '/'),
                FullDirectoryPath = fileUpload.FullDirectoryPath.Replace('\\', '/'),
            });
            return new SuccessResult(Messages.SuccessAddOperation);
        }

        public IResult Delete(SystemFile systemFile)
        {
            _systemFileDal.Delete(systemFile);
            return new SuccessResult(Messages.SuccessDeleteOperation);
        }

        public IListDataResult<SystemFile> GetAll()
        {
            return new SuccessListDataResult<SystemFile>(_systemFileDal.GetAll());
        }

        public ISingleDataResult<SystemFile> GetBySystemFileId(int fileId)
        {
            return new SuccessSingleDataResult<SystemFile>(_systemFileDal.Get(s => s.Id == fileId));
        }

        public IListDataResult<SystemFileDto> GetByUserEmail(string email)
        {
            return new SuccessListDataResult<SystemFileDto>(_systemFileDal.GetDtos(x => x.UserEmail == email));
        }

        public IListDataResult<SystemFile> GetByUserSystemFileId(int userId)
        {
            return new SuccessListDataResult<SystemFile>(_systemFileDal.GetAll(s => s.UserId == userId));
        }

        public IResult Update(SystemFile systemFile)
        {
            _systemFileDal.Update(systemFile);
            return new SuccessResult(Messages.SuccessUpdateOperation);
        }
    }
}
