const {
  json,
  timeParse,
  extent,
  scaleTime,
  scaleLinear,
  select,
  line,
  axisLeft,
  axisBottom,
} = d3;

async function drawLineChart() {
  /* ACCESS DATA */
  const dataset = await json("../nyc_weather_data.json");

  const dateParser = timeParse("%Y-%m-%d");

  const xAccessor = (d) => dateParser(d.date);
  const yAccessor = (d) => d.temperatureMax;

  /* CHART DIMENSIONS */
  const dimensions = {
    width: 800,
    height: 400,
    margin: {
      top: 10,
      right: 10,
      bottom: 30,
      left: 30,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

  /* SCALES */
  const xScale = scaleTime()
    .domain(extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth]);

  const yScale = scaleLinear()
    .domain(extent(dataset, yAccessor))
    .range([dimensions.boundedHeight, 0]);

  /* DRAW DATA */
  const wrapper = select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );

  const freezingTemperatureY = yScale(32);
  bounds
    .append("rect")
    .attr("x", 0)
    .attr("width", dimensions.boundedWidth)
    .attr("y", freezingTemperatureY)
    .attr("height", dimensions.boundedHeight - freezingTemperatureY)
    .attr("fill", "hsl(180, 44%, 92%)");

  const lineGenerator = line()
    .x((d) => xScale(xAccessor(d)))
    .y((d) => yScale(yAccessor(d)));

  bounds
    .append("path")
    .attr("d", lineGenerator(dataset))
    .attr("fill", "none")
    .attr("stroke", "hsl(41, 35%, 52%)")
    .attr("stroke-width", 2);

  /* PERIPHERALS */
  /*
  const yAxisGenerator = axisLeft().scale(yScale);
  const yAxis = bounds.append('g')
  yAxisGenerator(yAxis);
  */
  const yAxisGenerator = axisLeft().scale(yScale);
  bounds.append("g").call(yAxisGenerator);

  const xAxisGenerator = axisBottom().scale(xScale);

  bounds
    .append("g")
    .style("transform", `translate(0px, ${dimensions.boundedHeight}px)`)
    .call(xAxisGenerator);
}

drawLineChart();

const makeChart = () => {
  const data = [35, 15, 15, 35]
  const div = d3.select('body')
  const width = window.innerWidth
  const height = window.innerHeight
  const radius = Math.min(width, height) / 2
  const colorScale = d3.scaleOrdinal(['#7326AB', '#2A59A9', '#E5A1D4', '#00A0B0'])
  const svg = div.append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)
  
  const pie = d3.pie().value(d => d).sort(null)
  const arc = d3.arc().outerRadius(radius * 0.75).innerRadius(0)
  
  const g = svg.selectAll('.arc')
    .data(pie(data))
    .enter().append('g')
    .attr('class', 'arc')
  
  g.append('path')
    .attr('d', arc)
    .attr('class', 'arc')
    .style('fill', (d, i) => colorScale(i))
    .style('stroke', '#11141C')
    .style('stroke-width', 4)
}
makeChart()