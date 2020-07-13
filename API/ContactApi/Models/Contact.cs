using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ContactApi.Models
{
    public class Contact
    {
        [Key]
        public int ContactId { get; set; }

        [Required]
        [Column(TypeName="nvarchar(50)")]
        public string FirstName { get; set; }

        [Required]
        [Column(TypeName ="nvarchar(50)")]
        public string LastName { get; set; }

        [Required]
        [Column(TypeName ="nvarchar(50)")]
        public string Email { get; set; }

        [Required]
        [Column(TypeName ="nvarchar(10)")]
        public string PhoneNumber { get; set; }

        [Column(TypeName ="bit")]
        public bool Status { get; set; }
    }
}
