// page 172

import { Bus } from "./Bus.js";
import { Cabinet } from "./Cabinet.js";
import { Card } from "./Card.js";
import { Chassis } from "./Chassis.js";
import { FloppyDisk } from "./FloppyDisk.js";

const cabinet: Cabinet = new Cabinet("PC Cabinet");

const chassis: Chassis = new Chassis("PC Chassis");

cabinet.Add(chassis);

const bus: Bus = new Bus("MCA Bus");

bus.Add(new Card("16Mbs Token Ring"));

chassis.Add(bus);
chassis.Add(new FloppyDisk("3.5in Floppy"));

console.log(chassis.NetPrice().GetValue());
