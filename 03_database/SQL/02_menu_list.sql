CREATE TABLE menu_list (
    menu_id INT AUTO_INCREMENT NOT NULL,
    type VARCHAR(30),
    name VARCHAR(30),
    detail VARCHAR(30),
    units VARCHAR(30),
    PRIMARY KEY(menu_id)
)

INSERT INTO menu_list VALUES (
    (1, "เนื้อ", "เนื้อคารูบิ", NULL, "จาน"),
    (2, "เนื้อ", "เนื้อฮารามิ", NULL, "จาน"),
    (3, "เนื้อ", "เนื้อวากิว-A3", NULL, "จาน"),
    (4, "เนื้อ", "เนื้อริบอาย", NULL, "จาน"),
    (5, "เนื้อ", "เนื้อบิสเก็ต-US", NULL, "จาน"),
    (6, "เนื้อ", "ลิ้นวัว", NULL, "จาน"),
    (7, "หมู", "สันคอหมูคุโรบุตะ", NULL, "จาน"),
    (8, "ทะเล", "กุ้งไข่", NULL, "จาน"),
    (9, "ทะเล", "หอยเชลล์", NULL, "จาน"),
    (10, "ทะเล", "หอยแมลงภู่ชิลี", NULL, "จาน"),
    (11, "ทะเล", "ปลาแซลม่อล", NULL, "จาน"),
)