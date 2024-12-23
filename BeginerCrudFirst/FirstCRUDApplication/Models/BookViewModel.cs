﻿using System.ComponentModel.DataAnnotations;

namespace FirstCRUDApplication.Models
{
    public class BookViewModel
    {
        public long Id { get; set; }       
        public string Name { get; set; }
        [Display(Name = "ISBN No")]
        public string ISBN { get; set; }
        public string Edition { get; set; }
        public string Author { get; set; } 
        public string Publisher { get; set; }      

    }

    public class CatalogViewModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }

    }

    public class GenreViewModel
    {
        public long Id { get; set; }
        public string Name { get; set; }

    }
}