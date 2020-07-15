var width=300,
    height=300,
    margin=10;

var svg = d3.select('#graph')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

var g = svg.append('g')
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')');


var data = d3.zip(
    d3.range(0, 12),
    d3.shuffle(d3.range(0, 12))),
    colors = ['red',
        'orange',
        'yellow',
        'green',
        'cyan',
        'sky',
        'blue' ,
        'indigo',
        'violet',
        'grey'];

var chord = d3.svg.chord()
            .source(function(d){ return d[0]; })
            .target(function(d){ return d[1]; })
            .radius(100)
            .startAngle(function(d){ return -2*Math.PI*(1/data.length)*d; })
            .endAngle(function(d){ return -2*Math.PI*(1/data.length)*((d-1)%data.length); });

var g4 = svg.append('g')
            .attr("transform", "translate(" + 0 + ", " + 0 + ")");
            
g4.append('g')
    .attr("transform", "translate(150, 150)")
    .selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('d', chord)
    .attr('fill', function(d, i){ return colors[i%colors.length]})
    .attr('stroke', function(d, i){ return colors[(i+1)%colors.length]});

