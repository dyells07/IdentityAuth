﻿using FirstCRUDApplication.Code;

namespace FirstCRUDApplication.Models
{
    public class BootstrapModel
    {
        public string ID { get; set; }
        public string AreaLabeledId { get; set; }
        public ModalSize Size { get; set; }
        public string Message { get; set; }
        public string ModalSizeClass
        {
            get
            {
                switch (this.Size)
                {
                    case ModalSize.XS:
                        return "modal-xs";
                    case ModalSize.Small:
                        return "modal-sm";
                    case ModalSize.Large:
                        return "modal-lg";
                    case ModalSize.XL:
                        return "modal-xl";
                    case ModalSize.Medium:
                    default:
                        return "";
                }
            }
        }        
    }
}