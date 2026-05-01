import { Clock, Scissors } from "lucide-react";

const cats = [
  {
    "category": "Membres\u00edas",
    "items": [
      {
        "name": "Plan B\u00e1sico",
        "price": "Gs. 150.000/mes",
        "desc": "Acceso a sala de pesas y cardio",
        "duration": "Mensual"
      },
      {
        "name": "Plan Completo",
        "price": "Gs. 250.000/mes",
        "desc": "Acceso total + pileta + clases",
        "duration": "Mensual"
      },
      {
        "name": "Plan Familiar",
        "price": "Gs. 400.000/mes",
        "desc": "Hasta 4 miembros de la familia",
        "duration": "Mensual"
      }
    ]
  },
  {
    "category": "Clases",
    "items": [
      {
        "name": "Funcional",
        "price": "Incluido",
        "desc": "HIIT y entrenamiento funcional",
        "duration": "45 min"
      },
      {
        "name": "Spinning",
        "price": "Incluido",
        "desc": "Ciclismo indoor de alto nivel",
        "duration": "45 min"
      },
      {
        "name": "Cross Training",
        "price": "Incluido",
        "desc": "Entrenamiento cruzado intensivo",
        "duration": "60 min"
      },
      {
        "name": "Aquagym",
        "price": "Incluido",
        "desc": "Ejercicios en pileta climatizada",
        "duration": "45 min"
      }
    ]
  },
  {
    "category": "Instalaciones",
    "items": [
      {
        "name": "Pileta Climatizada",
        "price": "Incluida",
        "desc": "Pileta semi-ol\u00edmpica climatizada",
        "duration": "\u2014"
      },
      {
        "name": "Sauna y Jacuzzi",
        "price": "Incluido",
        "desc": "Relajaci\u00f3n post-entreno",
        "duration": "\u2014"
      },
      {
        "name": "Cancha de Squash",
        "price": "Incluida",
        "desc": "Cancha profesional",
        "duration": "\u2014"
      }
    ]
  }
];

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center text-primary mb-2">Nuestros Servicios</h2>
        <p className="text-center text-foreground-light mb-12 max-w-xl mx-auto">Transformamos tu estilo con profesionalismo y dedicación</p>
        <div className="space-y-10">
          {cats.map((cat: any, ci: number) => (
            <div key={ci}>
              <h3 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Scissors className="w-5 h-5 text-secondary" /> {cat.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((svc: any, si: number) => (
                  <div key={si} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{svc.name}</h4>
                      <span className="text-secondary font-bold whitespace-nowrap ml-2">{svc.price}</span>
                    </div>
                    <p className="text-sm text-foreground-light">{svc.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-foreground-light">
                      <Clock className="w-3 h-3" /> {svc.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://wa.me/595986106062?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20Complejo%20Cocodrilo" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all shadow-md">
            Reservar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
