SELECT p.name, p2.name
FROM products p
RIGHT JOIN providers p2
ON p.id_providers = p2.id
WHERE p.id_categories = 6;