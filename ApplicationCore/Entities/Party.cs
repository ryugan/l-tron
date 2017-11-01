using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Entities
{
    public class Party
    {
        public int GridHeight { get; set; }
        public int GridWidth { get; set; }
        public double Speed { get; set; }
        public List<Player> Players { get; set; }
    }
}
