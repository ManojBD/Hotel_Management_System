using hotel_managementstm_api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;

namespace hotel_managementstm_api.Data
{
    public class CustomerDbContext :DbContext
    {
        public CustomerDbContext(DbContextOptions<CustomerDbContext>options):base(options)
        {

        }

        public DbSet<Customer> Customers { get; set; }

    }
}
