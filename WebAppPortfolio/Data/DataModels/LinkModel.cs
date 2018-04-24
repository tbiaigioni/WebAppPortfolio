﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppPortfolio.Data.Entities
{
    public class LinkModel
    {
        public string Href { get; set; }
        public string Rel { get; set; }
        public string Verb { get; set; } = "GET";
    }
}
