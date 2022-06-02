using Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entities.Concrete
{
    public class BaseEntity<T> : IEntity
    {
        public T Id { get; set; }

    }

    public class BaseEntity : BaseEntity<int>
    {
        public bool IsApproved { get; set; }
    }



}
