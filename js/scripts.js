
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});


function valida_envia(){
    //valido el rut
    if (document.fvalida.rut.value.length==0){
           alert("Tiene que escribir su Rut")
           document.fvalida.rut.focus()
           return 0;
    }

    //valido el digito
    if (document.fvalida.fdigit.value.length==0){
        alert("Tiene que escribir su Digito Verificador")
        document.fvalida.fdigit.focus()
        return 0
     }else{
          const digive = dgv(fvalida.rut.value) 
        if (fvalida.fdigit.value!=digive){
            alert("rut incorrecto")
            document.fvalida.fdigit.focus()
            return 0
        }
     }

    //valido el nombre
    if (document.fvalida.name.value.length==0){
        alert("Tiene que escribir su Nombre")
        document.fvalida.name.focus()
        return 0;
 }
 
     //valido el apellido
     if (document.fvalida.lastname.value.length==0){
        alert("Tiene que escribir su Apellido")
        document.fvalida.lastname.focus()
        return 0;
 }

    //valido la direccion
    if (document.fvalida.adress.value.length==0){
        alert("Tiene que escribir su Direcci??n")
        document.fvalida.adress.focus()
        return 0;
 }

    //valido la region
    if (document.fvalida.regiones.selectedIndex==0){
        alert("Tiene que seleccionar una Region")
        document.fvalida.comuna.focus()
        return 0;
 }

    //valido la comuna
    if (document.fvalida.comunas.selectedIndex==0){
        alert("Tiene que seleccionar una Comuna")
        document.fvalida.comuna.focus()
        return 0;
 }

    //valido el tipo de vehiculo
    if (document.fvalida.typecar.selectedIndex==0){
        alert("Debe seleccionar un tipo de Vehiculo.")
        document.fvalida.typecar.focus()
        return 0;
 }

    //valido la marca
    if (document.fvalida.typemarca.selectedIndex==0){
        alert("Tiene que escribir la marca de su vehiculo")
        document.fvalida.marca.focus()
        return 0;
 }

    //valido el modelo
    if (document.fvalida.modelo.value.length==0){
        alert("Tiene que escribir el Modelo de su Vehiculo")
        document.fvalida.modelo.focus()
        return 0;
 }

    //valido el a??o
    if (document.fvalida.typeyear.selectedIndex==0){
        alert("Tiene que seleccionar el A??o de su Vehiculo")
        document.fvalida.year.focus()
        return 0;
 }

    //valido revision tecnica
    if (document.fvalida.typertecnica.selectedIndex==0){
        alert("Debe seleccionar revision tecnica.")
        document.fvalida.rtecnica.focus()
        return 0;0
 }

     //valido lavado
    if (document.fvalida.typetiposer.selectedIndex==0){
        alert("Tiene que seleccionar un tipo de servicio")
        document.fvalida.flexRadioDefault1.focus()
        return 0;
 }

    //valido encargado
    if (document.fvalida.Encargado.selectedIndex==0){
        alert("Debe seleccionar Encargado.")
        document.fvalida.Encargado.focus()
        return 0;0
 }

    //valido fecha
    if (document.fvalida.fecha.selectedIndex==0){
        alert("Debe seleccionar Fecha.")
        document.fvalida.fecha.focus()
        return 0;0
 }

    //valido hora
    if (document.fvalida.hora.selectedIndex==0){
        alert("Debe seleccionar Encargado.")
        document.fvalida.hora.focus()
        return 0;0
 }

 
    //el formulario se envia

 ///   alert(document.fvalida.typetiposer.selectedIndex);

    if (document.fvalida.typetiposer.selectedIndex==3){
        var total = Math.round((7000 + 15000)*1.19)
    }else if(document.fvalida.typetiposer.selectedIndex==1){
        var total = Math.round(7000*1.19)
    }else if(document.fvalida.typetiposer.selectedIndex==2){
        var total = Math.round(15000*1.19)
    }

    alert("Muchas gracias por enviar el formulario" + "El Valor total de su servicio es : "  + total);
    document.fvalida.submit();
}

function dgv(T)    //digito verificador
{  
      var M=0,S=1;
	  for(;T;T=Math.floor(T/10))
      S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
      
//      alert(S?S-1:'k');
 }

 var RegionesYcomunas = {

	"regiones": [{
			"NombreRegion": "Arica y Parinacota",
			"comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
	},
		{
			"NombreRegion": "Tarapac??",
			"comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Cami??a", "Colchane", "Huara", "Pica"]
	},
		{
			"NombreRegion": "Antofagasta",
			"comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollag??e", "San Pedro de Atacama", "Tocopilla", "Mar??a Elena"]
	},
		{
			"NombreRegion": "Atacama",
			"comunas": ["Copiap??", "Caldera", "Tierra Amarilla", "Cha??aral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
	},
		{
			"NombreRegion": "Coquimbo",
			"comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicu??a", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbal??", "Monte Patria", "Punitaqui", "R??o Hurtado"]
	},
		{
			"NombreRegion": "Valpara??so",
			"comunas": ["Valpara??so", "Casablanca", "Conc??n", "Juan Fern??ndez", "Puchuncav??", "Quintero", "Vi??a del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa Mar??a", "Quilpu??", "Limache", "Olmu??", "Villa Alemana"]
	},
		{
			"NombreRegion": "Regi??n del Libertador Gral. Bernardo O???Higgins",
			"comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Do??ihue", "Graneros", "Las Cabras", "Machal??", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requ??noa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Ch??pica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
	},
		{
			"NombreRegion": "Regi??n del Maule",
			"comunas": ["Talca", "ConsVtuci??n", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "R??o Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curic??", "Huala????", "Licant??n", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuqu??n", "Linares", "Colb??n", "Longav??", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
	},
		{
			"NombreRegion": "Regi??n del Biob??o",
			"comunas": ["Concepci??n", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tom??", "Hualp??n", "Lebu", "Arauco", "Ca??ete", "Contulmo", "Curanilahue", "Los ??lamos", "Tir??a", "Los ??ngeles", "Antuco", "Cabrero", "Laja", "Mulch??n", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa B??rbara", "Tucapel", "Yumbel", "Alto Biob??o", "Chill??n", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chill??n Viejo", "El Carmen", "Ninhue", "??iqu??n", "Pemuco", "Pinto", "Portezuelo", "Quill??n", "Quirihue", "R??nquil", "San Carlos", "San Fabi??n", "San Ignacio", "San Nicol??s", "Treguaco", "Yungay"]
	},
		{
			"NombreRegion": "Regi??n de la Araucan??a",
			"comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufqu??n", "Puc??n", "Saavedra", "Teodoro Schmidt", "Tolt??n", "Vilc??n", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacaut??n", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Pur??n", "Renaico", "Traigu??n", "Victoria", ]
	},
		{
			"NombreRegion": "Regi??n de Los R??os",
			"comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "M??fil", "Mariquina", "Paillaco", "Panguipulli", "La Uni??n", "Futrono", "Lago Ranco", "R??o Bueno"]
	},
		{
			"NombreRegion": "Regi??n de Los Lagos",
			"comunas": ["Puerto Montt", "Calbuco", "Cocham??", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maull??n", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de V??lez", "Dalcahue", "Puqueld??n", "Queil??n", "Quell??n", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "R??o Negro", "San Juan de la Costa", "San Pablo", "Chait??n", "Futaleuf??", "Hualaihu??", "Palena"]
	},
		{
			"NombreRegion": "Regi??n Ais??n del Gral. Carlos Ib????ez del Campo",
			"comunas": ["Coihaique", "Lago Verde", "Ais??n", "Cisnes", "Guaitecas", "Cochrane", "O???Higgins", "Tortel", "Chile Chico", "R??o Ib????ez"]
	},
		{
			"NombreRegion": "Regi??n de Magallanes y de la Ant??rVca Chilena",
			"comunas": ["Punta Arenas", "Laguna Blanca", "R??o Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Ant??rVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
	},
		{
			"NombreRegion": "Regi??n Metropolitana de Santiago",
			"comunas": ["Cerrillos", "Cerro Navia", "Conchal??", "El Bosque", "Estaci??n Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maip??", "??u??oa", "Pedro Aguirre Cerda", "Pe??alol??n", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaqu??n", "San Miguel", "San Ram??n", "Vitacura", "Puente Alto", "Pirque", "San Jos?? de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhu??", "Curacav??", "Mar??a Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Pe??aflor"]
	}]
}


jQuery(document).ready(function () {

	var iRegion = 0;
	var htmlRegion = '<option value="sin-region">Seleccione regi??n</option><option value="sin-region">--</option>';
	var htmlComunas = '<option value="sin-region">Seleccione comuna</option><option value="sin-region">--</option>';

	jQuery.each(RegionesYcomunas.regiones, function () {
		htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
		iRegion++;
	});

	jQuery('#regiones').html(htmlRegion);
	jQuery('#comunas').html(htmlComunas);

	jQuery('#regiones').change(function () {
		var iRegiones = 0;
		var valorRegion = jQuery(this).val();
		var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
		jQuery.each(RegionesYcomunas.regiones, function () {
			if (RegionesYcomunas.regiones[iRegiones].NombreRegion == valorRegion) {
				var iComunas = 0;
				jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
					htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '</option>';
					iComunas++;
				});
			}
			iRegiones++;
		});
		jQuery('#comunas').html(htmlComuna);
	});
	jQuery('#comunas').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Regi??n');
		} else if (jQuery(this).val() == 'sin-comuna') {
			alert('selecciones Comuna');
		}
	});
	jQuery('#regiones').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Regi??n');
		}
	});

});