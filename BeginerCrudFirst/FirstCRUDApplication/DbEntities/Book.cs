namespace FirstCRUDApplication.DbEntities
{
    public class Book:BaseEntity
    {
        public string Name { get; set; }
        public string ISBN { get; set; }
        public string Author { get; set; }
        public string Edition { get; set; }
        public string Publisher { get; set; }
    }

    public class Catalog : BaseEntity
    {
        public string Name { get; set; } 
        public string Genre { get; set; }
    }
}
