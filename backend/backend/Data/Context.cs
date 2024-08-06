using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>()
                .Property(c => c.Name)
                .HasColumnType("varchar(255)");

            modelBuilder.Entity<Contact>()
                .Property(c => c.PhoneNumber)
                .HasColumnType("varchar(50)");

            modelBuilder.Entity<Contact>()
                .Property(c => c.Email)
                .HasColumnType("varchar(255)");

            modelBuilder.Entity<Contact>()
                .Property(c => c.Notes)
                .HasColumnType("varchar(500)");
        }
    }
}