using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Repositories;

public class ContactRepository : IRepository<Contact>
{
    private readonly AppDbContext _context;

    public ContactRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Contact>> GetAllAsync()
    {
        return await _context.Contacts.ToListAsync();
    }

    public async Task<Contact> GetByIdAsync(int id)
    {
        return await _context.Contacts.FindAsync(id);
    }

    public async Task AddAsync(Contact entity)
    {
        _context.Contacts.Add(entity);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Contact entity)
    {
        // Ensure the entity is being tracked
        var existingEntity = await _context.Contacts.FindAsync(entity.Id);
        if (existingEntity == null)
        {
            throw new InvalidOperationException("Entity not found.");
        }

        // Update the existing entity
        _context.Entry(existingEntity).CurrentValues.SetValues(entity);

        await _context.SaveChangesAsync();
    }


    public async Task DeleteAsync(int id)
    {
        var contact = await _context.Contacts.FindAsync(id);
        if (contact != null)
        {
            _context.Contacts.Remove(contact);
            await _context.SaveChangesAsync();
        }
    }
}