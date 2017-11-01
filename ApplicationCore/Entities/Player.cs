using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Entities
{
    public class Player
    {
        public int Number { get; set; }
        public string Pseudo { get; set; }
        public string MotorbikeColor { get; set; }
        public string UpKey { get; set; }
        public string DownKey { get; set; }
        public string LeftKey { get; set; }
        public string RightKey { get; set; }
        public string SpeedKey { get; set; }
    }
}
