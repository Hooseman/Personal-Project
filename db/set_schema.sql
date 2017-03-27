DROP TABLE IF EXISTS weaponTypes, rifles, handguns, shotguns, ammunition;

CREATE TABLE weaponTypes (
  id SERIAL PRIMARY KEY,
  type text
);

INSERT INTO weaponTypes (type) VALUES
('rifle'),
('shotgun'),
('handgun'),
('ammunition');

CREATE TABLE rifles (
  id SERIAL PRIMARY KEY,
  name text,
  class text,
  description text,
  modelNum integer,
  dollar integer,
  cents text,
  imageurl text,
  weaponType integer references weaponTypes(id)
);

INSERT INTO rifles (name,class,description,modelNum,dollar,cents,imageurl,weaponType) VALUES
('MODEL 700','BOLT-ACTION','Featuring the Model 700 Long Range',29,879,'76','http://bit.ly/2nE3exs', 1),
('MODEL SEVEN','BOLT-ACTION','FEATURING THE MODEL SEVEN SYNTHETIC BOLT-ACTION',5,731,'','http://bit.ly/2mOdChe',1),
('MODEL 783','BOLT-ACTION','FEATURING THE MODEL 783 SCOPED',2,399,'','http://bit.ly/2nQsuxe',1),
('MODEL R-15','MODERN SPORTING','FEATURING THE MODEL R-15 VTR SS VARMINT',5,1299,'','http://bit.ly/2n5OwfJ',1),
('MODEL R-25 G11','MODERN SPORTING','FEATURING THE MODEL R-25 G11',0,1697,'','http://bit.ly/2nI4T53',1),
('MODEL 700 ULTIMATE','MUZZLELOADING','FEATURING THE MODEL 700 LSS ULTIMATE MUZZLELOADER',2,949,'','http://bit.ly/2o4I1ZP',1),
('MODEL 7600','PUMP-ACTION','FEATURING THE MODEL 7600 - 200TH ANN. LTD. ED.',2,918,'','http://bit.ly/2o4UKeY',1),
('MODEL 597','RIMFIRE','FEATURING THE MODEL 597 PINK CAMO',3,254,'','http://bit.ly/2nBXzY9',1),
('MODEL 552 SPEEDMASTER','RIMFIRE','FEATURING THE MODEL 552 BDL™ SPEEDMASTER®',0,707,'','http://bit.ly/2mQoTxL',1),
('MODEL 572 FEILDMASTER','RIMFIRE','FEATURING THE MODEL 572 BDL™ FIELDMASTER®',0,723,'','http://bit.ly/2msWXoi',1);

CREATE TABLE shotguns (
  id SERIAL PRIMARY KEY,
  name text,
  class text,
  description text,
  modelNum integer,
  dollar integer,
  cents text,
  imageurl text,
  weaponType integer references weaponTypes(id)
);

INSERT INTO shotguns (name,class,description,modelNum,dollar,cents,imageurl,weaponType) VALUES
('MODEL 11-87','AUTOLOADING','FEATURING THE MODEL 11-87™ SPORTSMAN® BLACK SYNTHETIC',4,704,'41','http://bit.ly/2nnLgOU', 2),
('MODEL 1100','AUTOLOADING','FEATURING THE MODEL 1100 CLASSIC TRAP',5,1334,'','http://bit.ly/2mR509L',2),
('V3 FIELD SPORT','AUTOLOADING','FEATURING THE V3 FIELD SPORT WALNUT',4,995,'','http://bit.ly/2nnOnX1',2),
('VERSA MAX','AUTOLOADING','FEATURING THE VERSA MAX SYNTHETIC',9,1456,'','http://bit.ly/2nCR1bW',2),
('MODEL 870','PUMP ACTION','FEATURING THE MODEL 870 HARDWOOD HOME DEFENSE',25,420,'','http://bit.ly/2nnPNka',2);

CREATE TABLE handguns (
  id SERIAL PRIMARY KEY,
  name text,
  class text,
  description text,
  modelNum integer,
  dollar integer,
  cents text,
  imageurl text,
  weaponType integer references weaponTypes(id)
);

INSERT INTO handguns (name,class,description,modelNum,dollar,cents,imageurl,weaponType) VALUES
('REMINGTON R51','HANDGUNS','FEATURING THE REMINGTON R51 CRIMSON TRACE',2,648,'','http://bit.ly/2nrAYgN',3),
('REMINGTON RP','HANDGUNS','FEATURING THE RP9',0,489,'','http://bit.ly/2nrz8wc',3),
('MODEL 1911 R1','HANDGUNS','FEATURING THE 1911 R1 STAINLESS',6,837,'','http://bit.ly/2mUFSyV',3),
('MODEL 1911 R1 ENHANCED','HANDGUNS','FEATURING THE 1911 R1 ENHANCED',6,903,'','http://bit.ly/2nrGujv',3),
('MODEL 1911 R1 CARRY','HANDGUNS','FEATURING THE 1911 R1 CARRY COMMANDER CT',3,1350,'','http://bit.ly/2mwfqA1',3),
('RM380','HANDGUNS','FEATURING THE RM380 MICRO CRIMSON TRACE',2,638,'','http://bit.ly/2mYqLVX',3);

CREATE TABLE ammunition (
  id SERIAL PRIMARY KEY,
  name text,
  class text,
  description text,
  modelNum integer,
  dollar integer,
  cents text,
  imageurl text,
  weaponType integer references weaponTypes(id)
);

INSERT INTO ammunition (name,class,description,modelNum,dollar,cents,imageurl,weaponType) VALUES
('UPLAND LOADS','SHOTSHELL','FEATURING HEAVY DOVE LOADS',5,0,'','http://bit.ly/2mApgRA',4),
('WATERFOWL LOADS','SHOTSHELL','FEATURING HYPERSONIC STEEL',3,0,'','http://bit.ly/2nl3eQ2',4),
('TURKEY LOADS','SHOTSHELL','FEATURING NITRO MAG® BUFFERED MAGNUM LOADS',4,0,'','http://bit.ly/2nxapGV',4),
('TARGET LOADS','SHOTSHELL','FEATURING AMERICAN CLAY & FIELD SPORT LOADS',5,0,'','http://bit.ly/2mAzykB',4),
('SLUGS','SHOTSHELL','FEATURING PREMIER COPPER SOLID SABOT SLUGS',7,0,'','http://bit.ly/2nR1Bwu',4),
('BUCKSHOT','SHOTSHELL','FEATURING EXPRESS MAGNUM BUCKSHOT',4,0,'','http://bit.ly/2mAqcp4',4),
('CENTERFIRE RIFLE','AMMUNITION','FEATURING CORE-LOKT',10,0,'','http://bit.ly/2nxbSgj',4),
('HANDGUN','AMMUNITION','FEATURING HIGH TERMINAL PERFORMANCE (HTP)',4,0,'','http://bit.ly/2o0TVVt',4),
('RIMFIRE','AMMUNITION','FEATURING PREMIER GOLD BOX RIMFIRE',13,0,'','http://bit.ly/2nRwX5Z',4),
('BRASS','COMPONENTS','FEATURING UNPRIMED PISTOL & REVOLVER BRASS',3,0,'','http://bit.ly/2nxiL1e',4),
('BULLETS','COMPONENTS','FEATURING PREMIER® CORE-LOKT®ULTRA BONDED® BULLETS',2,0,'','http://bit.ly/2nlULxp',4),
('PRIMERS','COMPONENTS','FEATURING 209 PREMIER® STS® PRIMERS',2,0,'','http://bit.ly/2nOeCX2',4),
('WADS','COMPONENTS','FEATURING SHOTSHELL WADS – HUNTING – POWER PISTON® ONE PIECE',2,0,'','http://bit.ly/2nlUXN9',4),
('MUZZLELOADING','COMPONENTS','FEATURING KLEANBORE® MUZZLELOADING PRIMERS',2,0,'','http://bit.ly/2nNY9SM',4);
