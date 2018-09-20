var items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
]

var tmpl1 = '`<b-container fluid> '
			+'<b-img center  src="./assets/png/tzmap.png" fluid-grow alt="Часовые пояса России" />'
			+'</b-container>`'
			
var tmpl2 = '`'
	+'<b-container fluid>'
	+'	<b-row style="padding: 2px;"><b-col sm="12">'
	+'		<b-button-toolbar class="mb-12" aria-label="Toolbar with button groups and input groups">'
	+'			<b-input-group class="input-group-sm w-100">'
	+'				<b-input-group-prepend>'
	+'					<b-btn variant="outline-secondary" v-on:click="getAsoz"><span class="oi" data-glyph="magnifying-glass" title="icon magnifying-glass" aria-hidden="true"></span></b-btn>'
	+'				</b-input-group-prepend>'
	+'				<b-form-input class="w-25" placeholder="Фамилия Имя Отчество" v-model="sfio" @keydown.enter.native="getAsoz"></b-form-input>'
	+'				<b-input-group-append>'
	+'					<b-btn size="sm" variant="outline-secondary" v-on:click="sfio=\'\'"><span class="oi" data-glyph="circle-x" title="Очистить" aria-hidden="true"></span></b-btn>'
	+'				</b-input-group-append>'
	+'			</b-input-group>'	
	+'		</b-button-toolbar>'
	+'	</b-col></b-row>'
	+'	<b-row style="padding: 2px;"><b-col sm="12">'
	+'		<b-input-group size="sm" class="mb-3" prepend="Фильтр">'
	+'			<b-form-input v-model="forg" placeholder="Предприятие" @keyup.native="farm=\'\'; fdata(\'forg\')"/>'
	+'			<b-input-group-append>'
	+'				<b-btn size="sm" variant="outline-secondary" v-on:click="forg=\'\'; fdata(\'forg\')"><span class="oi" data-glyph="circle-x" title="Очистить" aria-hidden="true"></span></b-btn>'
	+'			</b-input-group-append>'
	+'			<b-form-input v-model="farm" placeholder="ИС/Арм" @keyup.native="forg=\'\'; fdata(\'farm\')" />'
	+'			<b-input-group-append>'
	+'				<b-btn size="sm" variant="outline-secondary" v-on:click="farm=\'\'; fdata(\'farm\')"><span class="oi" data-glyph="circle-x" title="Очистить" aria-hidden="true"></span></b-btn>'
	+'			</b-input-group-append>'
	+'		</b-input-group>	'
	+'	</b-col></b-row>'
	+'	<div class="scrolling-wrapper" style="height: 80%">'
	+'		<b-table striped hover :items="items"></b-table>'
	+'	</div>'
	+'</b-container>'
	+'`';

var Tmap = Vue.component('tmap', 
{
	template: tmpl1
});

var Asoz = Vue.component('asoz', 
{
	template: tmpl2
	,data: function()
	{
		return {sfio: '', forg: '', farm: '', items: items, fitem: ''}
	}
	,methods: 
	{
		getAsoz: function() 
		{
			var sf=this.sfio.replace(/\.+/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
			console.log('sfio - ',this.sfio,' - ',sf);
			/*this.$http.get('http://127.0.0.1/asoz/#/asoz').then(response => 
			{
				// get body data
				console.log(response.body);
			}
			,response => 
			{
				// error callback
			});*/
		},
		fdata: function(el)
		{
			var fitem = el,
				forg = this.forg,
				farm = this.farm;
			this.items = items.filter(function(el) 
			{
				var sel = fitem === 'forg' ? el.first_name : el.last_name;
				var query = fitem === 'forg' ? forg : farm;
				//console.log(fitem,' - ',sel,' - ',query);
				return sel.toLowerCase().indexOf(query.trimStart().toLowerCase()) > -1;
			});
		}
	}
});

const routes = [
  { path: '/asoz', component: Asoz },
  { path: '/tmap', component: Tmap }
]

// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
// Вы можете передавать и дополнительные опции, но пока не будем усложнять.
const router = new VueRouter({
  routes: routes // сокращённая запись для `routes: routes`
})

new Vue(
{
	data: 
	{
		items: items
	}
	,el: "#app"
	,router: router
});


