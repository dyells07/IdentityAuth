using PokemonReviewApp.Data;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;

namespace PokemonReviewApp.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private DataContext _context;
        public CategoryRepository(DataContext context)
        {
            _context = context;
        }
        public bool CategoryExists(int id) => _context.Categories.Any(c => c.Id == id);

        public bool CreateCategory(Category category)
        {
            _context.Categories.Add(category);
            return Save();
        }

        public bool DeleteCategory(Category category)
        {
            _context.Categories.Remove(category);
            return Save();
        }

        public ICollection<Category> GetCategories() => _context.Categories.ToList();


        public Category GetCategory(int id) => _context.Categories.FirstOrDefault(c => c.Id == id);

        public ICollection<Pokemon> GetPokemonByCategory(int categoryId) =>
           _context.PokemonCategories
                   .Where(pc => pc.CategoryId == categoryId)
                   .Select(pc => pc.Pokemon)
                   .ToList();

        private bool Save() => _context.SaveChanges() > 0 ? true : false;

        public bool UpdateCategory(Category category)
        {
            _context.Categories.Update(category);
            return Save();
        }
    }
}
