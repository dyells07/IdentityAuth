using FirstCRUDApplication.DbEntities;
using FirstCRUDApplication.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FirstCRUDApplication.Controllers
{
    public class CatalogController : Controller
    {
        private CRUDContext context;

        public CatalogController(CRUDContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IActionResult Index()
        {
            IEnumerable<CatalogViewModel> model = context.Set<Catalog>().ToList().Select(b => new CatalogViewModel
            {
                Id= b.Id,
                Name = b.Name,
                Genre = b.Genre
            });
            return View("Index", model);
        }

        [HttpGet]
        public IActionResult AddEditCatalog(long? id)
        {
            CatalogViewModel model = new CatalogViewModel();
            if (id.HasValue)
            {
                Catalog catalog = context.Set<Catalog>().SingleOrDefault(c => c.Id == id.Value);
                if (catalog != null)
                {
                    model.Id = catalog.Id;
                    model.Name = catalog.Name;
                    model.Genre = catalog.Genre;
                }
            }
            return PartialView("~/Views/Catalog/_AddEditCatalog.cshtml", model);
        }

        [HttpPost]
        public IActionResult AddEditBook(long? id, CatalogViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    bool isNew = !id.HasValue;
                    Catalog catalog = isNew ? new Catalog
                    {
                        AddedDate = DateTime.UtcNow
                    } : context.Set<Catalog>().SingleOrDefault(s => s.Id == id.Value);
                    catalog.Name = model.Name;
                    catalog.Genre = model.Genre;
                    catalog.IPAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();
                    catalog.ModifiedDate = DateTime.UtcNow;
                    if (isNew)
                    {
                        context.Add(catalog);
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
        public IActionResult DeleteCatalog(long id)
        {
            Catalog catalog = context.Set<Catalog>().SingleOrDefault(c => c.Id == id);
            string cataName = catalog.Name;         
            return PartialView("~/Views/Catalog/_DeleteCatalog.cshtml", model: cataName);
        }
        [HttpPost]
        public IActionResult DeleteCatalog(long id, IFormCollection form)
        {
            Catalog catalog = context.Set<Catalog>().SingleOrDefault(c => c.Id == id);
            context.Entry(catalog).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
