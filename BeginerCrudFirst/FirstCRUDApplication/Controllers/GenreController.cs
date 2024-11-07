using FirstCRUDApplication.DbEntities;
using FirstCRUDApplication.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FirstCRUDApplication.Controllers
{
    public class GenreController : Controller
    {
        private CRUDContext context;

        public GenreController(CRUDContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IActionResult Index()
        {
            IEnumerable<GenreViewModel> model = context.Set<Genre>().ToList().Select(b => new GenreViewModel
            {
                Id= b.Id,
                Name = b.Name
            });
            return View("Index", model);
        }

        [HttpGet]
        public IActionResult AddEditGenre(long? id)
        {
            GenreViewModel model = new GenreViewModel();
            if (id.HasValue)
            {
                Genre genre = context.Set<Genre>().SingleOrDefault(c => c.Id == id.Value);
                if (genre != null)
                {
                    model.Id = genre.Id;
                    model.Name = genre.Name;
                }
            }
            return PartialView("~/Views/Catalog/_AddEditCatalog.cshtml", model);
        }

        [HttpPost]
        public IActionResult AddEditBook(long? id, GenreViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    bool isNew = !id.HasValue;
                    Genre genre = isNew ? new Genre
                    {
                        AddedDate = DateTime.UtcNow
                    } : context.Set<Genre>().SingleOrDefault(s => s.Id == id.Value);
                    genre.Name = model.Name;
                    genre.IPAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();
                    genre.ModifiedDate = DateTime.UtcNow;
                    if (isNew)
                    {
                        context.Add(genre);
                    }
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult DeleteGenre(long id)
        {
            Genre genre = context.Set<Genre>().SingleOrDefault(c => c.Id == id);
            string genreName = genre.Name;         
            return PartialView("~/Views/Catalog/_DeleteCatalog.cshtml", model: genreName);
        }
        [HttpPost]
        public IActionResult DeleteGenre(long id, IFormCollection form)
        {
            Genre genre = context.Set<Genre>().SingleOrDefault(c => c.Id == id);
            context.Entry(genre).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
