class post:
    def __init__(self,type,url,date,category,cantidad_megusta):
        self.type = type
        self.url = url
        self.date = date
        self.category = category
        self.cantidad_megusta=cantidad_megusta



    def serializar(self):
        return {
            "type":self.type,
            "url":self.url,
            "date":self.date,
            "category":self.category,
            "cantidad_megusta":self.cantidad_megusta

            
        }