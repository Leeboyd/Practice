$(document).ready(function() {
    var data = {
        people: [{
            'firstName': 'Clark',
            'lastName': 'Kent'
        }, {
            'firstName': 'Bruce',
            'lastName': 'Wayne'
        }, {
            'firstName': 'Peter',
            'lastName': 'Parker'
        }]
    }
    var template = "{{#people}}{{firstName}} {{lastName}}<br />{{/people}}"
    var rendered = Mustache.render(template, data);
    $('#output').html(rendered);

    var data2 = {
        peo: [{
            "name": {
                "first": "Michael",
                "last": "Jackson"
            },
            "age": "RIP"
        }]
    }
    var template2 = "{{#peo}}{{name.first}} {{name.last}}<br>{{age}}{{/peo}}"
    $('#output2').html(Mustache.render(template2, data2));

    var data3 = {
        "person": false
    }
    var template3 = "Shown.{{#person}}Never shown!{{/person}}"
    $('#output3').html(Mustache.render(template3, data3));

    var data4 = {
       "stooges": [{"name": "Moe"}, {"name": "Larry"}, {"name": "Curly"}]
    }
    var template4 = "{{#stooges}}<b>{{name}}<b><br>{{/stooges}}"
    $('#output4').html(Mustache.render(template4, data4));

	var data5 = {
	"musketeers": ["Athos", "Aramis", "Porthos", "D'Artagnan"]
	}
	var template5 = "{{#musketeers}}*{{.}}{{/musketeers}}"
	$('#output5').html(Mustache.render(template5, data5));

	var data6 = {
		"beatles": [
			{ "firstName": "John", "lastName": "Lennon" },
			{ "firstName": "Paul", "lastName": "McCartney" },
			{ "firstName": "George", "lastName": "Harrison" },
			{ "firstName": "Ringo", "lastName": "Starr" }
		],
		"name": function () {
			return this.firstName + " " + this.lastName;
		}
	}
	var template6 ="{{#beatles}}* {{name}}{{/beatles}}"
	$('#output6').html(Mustache.render(template6, data6));

	var data7 = {"repos": []}
	var template7 = "{{#repos}}<b>{{name}}</b>{{/repos}}{{^repos}}No repos :({{/repos}}"
	$('#output7').html(Mustache.render(template7, data7));

	var data8 = {
	    "name": "Chris",
	    "value": 10000,
	    "taxed_value": 10000 - (10000 * 0.4),
	    "in_ca": true
	}
	var template8 = "Hello {{name}} You have just won {{value}} dollars! {{#in_ca}}Well, {{taxed_value}} dollars, after taxes.{{/in_ca}}"
	$('#output8').html(Mustache.render(template8, data8));
	});
