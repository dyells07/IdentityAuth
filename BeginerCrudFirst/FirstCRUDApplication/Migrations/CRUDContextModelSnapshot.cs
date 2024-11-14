﻿// <auto-generated />
using FirstCRUDApplication.DbEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace FirstCRUDApplication.Migrations
{
    [DbContext(typeof(CRUDContext))]
    partial class CRUDContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FirstCRUDApplication.DbEntities.Book", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("AddedDate");

                    b.Property<string>("Author")
                        .IsRequired();

                    b.Property<string>("Edition")
                        .IsRequired();

                    b.Property<string>("IPAddress");

                    b.Property<string>("ISBN")
                        .IsRequired();

                    b.Property<DateTime>("ModifiedDate");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Publisher")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Book");
                });

            modelBuilder.Entity("FirstCRUDApplication.DbEntities.Catalog", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("AddedDate");

                    b.Property<string>("Genre")
                        .IsRequired();

                    b.Property<string>("IPAddress");

                    b.Property<DateTime>("ModifiedDate");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Catalog");
                });

            modelBuilder.Entity("FirstCRUDApplication.DbEntities.Genre", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("AddedDate");

                    b.Property<string>("IPAddress");

                    b.Property<DateTime>("ModifiedDate");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Genre");
                });
#pragma warning restore 612, 618
        }
    }
}
