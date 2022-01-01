using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace hotel_managementstm_api.Models
{
    public class Customer
    { 
        [Key]
        public int CustomerId { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Address { get; set; }

    }
}
