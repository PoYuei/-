 /*
        let provinces = [];
        let provinceCitiesMap = {};
 document.querySelector('#provinceDropdown .dropdown-selected').addEventListener('click', function(event) {
    const optionsContainer = document.querySelector('.dropdown-options');
    console.log('111');

    // 切换显示和隐藏下拉选项
    if (optionsContainer.style.display === 'block') {
        optionsContainer.style.display = 'none';
    } else {
        optionsContainer.style.display = 'block';
        // 阻止事件冒泡，避免触发 document 上的点击事件监听器
        event.stopPropagation();
    }
});

// 添加点击事件到 document，当点击除了 .dropdown-selected 外的任何地方，关闭下拉选项
document.addEventListener('click', function(event) {
    const optionsContainer = document.querySelector('.dropdown-options');
    optionsContainer.style.display = 'none';
});


document.querySelectorAll('.dropdown-option').forEach(option => {
    option.addEventListener('click', function() {
        // 点击选项后更新显示的文本，并隐藏选项
        const selectedText = this.textContent;
        document.querySelector('.dropdown-selected').textContent = selectedText;
        document.querySelector('.dropdown-options').style.display = 'none';


    });
});

  function loadData(filePath) {
               Papa.parse(filePath, {
                   download: true,
                   header: true,
                   complete: function(results) {
                      results.data.forEach(function(item) {
                        const province = item['province'];
                        const city = item['city'];

                        if (!provinceCitiesMap[province]) {
                            provinceCitiesMap[province] = [];
                            provinces.push(province);
                        }
                        provinceCitiesMap[province].push(city);
                    });

           //         console.log('Provinces:', provinces);
             //       console.log('Province-Cities Map:', provinceCitiesMap);
                     populateProvinces();



                   }
               });
     }
         function populateProvinces() {
     //        const provinceDropdown = document.getElementById('provinceDropdown');

            const optionsContainer = document.querySelector('#yearDropdown .dropdown-options');


            provinces.forEach(province => {
                const option = document.createElement('div');
                option.textContent = province;
                option.addEventListener('click', () => {
                    provinceDropdown.querySelector('.dropdown-selected').textContent = province;
                    optionsContainer.style.display = 'none';
                    populateCities(province);
                });
                optionsContainer.appendChild(option);
            });

            provinceDropdown.querySelector('.dropdown-selected').addEventListener('click', (event) => {
                console.log('111');
                event.stopPropagation();
                optionsContainer.style.display = optionsContainer.style.display === 'none' ? 'block' : 'none';
            });
            console.log('111');
        }

        function populateCities(province) {
            const cityDropdown = document.getElementById('cityDropdown');
            const optionsContainer = cityDropdown.querySelector('.dropdown-options');
            optionsContainer.innerHTML = ''; // 清空之前的城市列表
            const cities = provinceCitiesMap[province];
            cities.forEach(city => {
                const option = document.createElement('div');
                option.textContent = city;
                option.addEventListener('click', () => {
                    cityDropdown.querySelector('.dropdown-selected').textContent = city;
                    optionsContainer.style.display = 'none';
                });
                optionsContainer.appendChild(option);
            });

            cityDropdown.querySelector('.dropdown-selected').addEventListener('click', (event) => {
                event.stopPropagation();
                optionsContainer.style.display = optionsContainer.style.display === 'none' ? 'block' : 'none';
            });
        }

        // 点击其他地方隐藏下拉框
        document.addEventListener('click', () => {
            document.querySelectorAll('.dropdown-options').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        });
     // 确保在 DOM 加载完毕后执行
        document.addEventListener('DOMContentLoaded', () => {
            loadData('省份城市对应表.csv');
        });
*/


//————————————————————————————————————————————————
var mapChart = echarts.init(document.getElementById('mainMap'));
$.getJSON('china.json', function (data) {
    console.log(data)
    echarts.registerMap('china', data);

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
        // 定义城市和经纬度数据
        let cities = [
            { name: '烟台', value: [121.447935, 37.463822], itemStyle: { color: '#00EEFF' } },
            { name: '南京', value: [118.796877, 32.060255], itemStyle: { color: '#00EEFF' } },
            { name: '昆明', value: [102.709372, 25.046432], itemStyle: { color: '#00EEFF' } },
            { name: '银川', value: [106.230909, 38.487193], itemStyle: { color: '#00EEFF' } },
            { name: '贵阳', value: [106.630211, 26.647661], itemStyle: { color: '#00EEFF' } },
            { name: '广州', value: [113.264435, 23.129163], itemStyle: { color: '#00EEFF' } },
            { name: '海口', value: [110.198293, 20.044002], itemStyle: { color: '#00EEFF' } },
            { name: '厦门', value: [118.11022, 24.490474], itemStyle: { color: '#00EEFF' } },
            { name: '珠海', value: [113.576726, 22.270715], itemStyle: { color: '#00EEFF' } },
            { name: '泉州', value: [118.589421, 24.908853], itemStyle: { color: '#00EEFF' } }
        ];
let points = [
    { value: [121.447935, 37.463822], itemStyle: { color: '#00EEFF' } }, // 烟台
    { value: [118.796877, 32.060255], itemStyle: { color: '#00EEFF' } }, // 南京
    { value: [102.709372, 25.046432], itemStyle: { color: '#00EEFF' } }, // 昆明
    { value: [106.230909, 38.487193], itemStyle: { color: '#00EEFF' } }, // 银川
    { value: [106.630211, 26.647661], itemStyle: { color: '#00EEFF' } }, // 贵阳
    { value: [113.264435, 23.129163], itemStyle: { color: '#00EEFF' } }, // 广州
    { value: [110.198293, 20.044002], itemStyle: { color: '#00EEFF' } }, // 海口
    { value: [118.11022, 24.490474], itemStyle: { color: '#00EEFF' } }, // 厦门
    { value: [113.576726, 22.270715], itemStyle: { color: '#00EEFF' } }, // 珠海
    { value: [118.589421, 24.908853], itemStyle: { color: '#00EEFF' } }, // 泉州
    { value: [113.266887, 23.133306], itemStyle: { color: '#00EEFF' } }  // 广州（重复的颜色）
];

        let gdCode = [116, 40]
        let codes = []
        points.forEach(item => {
          codes.push({ coords: [gdCode, item.value], lineStyle: item.lineStyle })
        })
        //部分打点可用pointData图中为全部打点，未用到该数据
        // let pointData = [
        //   { name: '天津', value: [117.190182, 39.125596] },
        //   { name: '湖北', value: [114.298572, 30.584355] },
        //   { name: '湖南', value: [112.982279, 28.19409] },
        //   { name: '江西', value: [115.892151, 28.676493] },
        //   { name: '甘肃', value: [103.823557, 36.058039] },
        //   { name: '浙江', value: [120.153576, 30.287459] },
        // ]
       var option = {
          backgroundColor: '#13297B',
          geo: {
            map: 'china',
            aspectScale: 0.75, // 长宽比
            zoom: 1.1,
            roam: false,
            regions: [{
              name: '南海诸岛',
              itemStyle: {
                areaColor: 'rgba(0, 10, 52, 1)',
                borderColor: 'rgba(0, 10, 52, 1)',
                normal: {
                  opacity: 0,
                  label: {
                    show: false,
                    color: '#009cc9',
                  },
                },
              },

            }],
          },
          series: [{
            type: 'map',
            roam: false,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                },
              },
              emphasis: {
                textStyle: {
                  color: '#fff',
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: '#0068FB',
                borderWidth: 1,
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [{
                    offset: 0,
                    color: '#0C3994', // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#0C3994', // 100% 处的颜色
                  }],
                  globalCoord: true, // 缺省为 false
                },
              },
              emphasis: {
                areaColor: '#0068FB',
                borderWidth: 0.1,
              },
            },
            zoom: 1.1,
            map: 'china', // 使用
          },
                {
                    name: '城市',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: cities,
                    symbolSize: 12,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                            color: '#FFFF00'  // 亮黄色字体颜色
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00EEFF'
                        }
                    }
                },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            zlevel: 1,
            rippleEffect: {
              number: 3, // 波纹的数量。
              period: 5, // 动画的周期，秒数。
              scale: 17, // 动画中波纹的最大缩放比例。
              brushType: 'fill', // 波纹的绘制方式，可选 'stroke' 和 'fill'。
            },
            symbolSize: 2,
            data: points,
          }, // 地图线的动画效果
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            zlevel: 1,
            rippleEffect: {
              number: 4,
              period: 5,
              scale: 21,
              brushType: 'fill',
            },
            symbolSize: 3,

          },
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4, // 箭头指向速度，值越小速度越快
              trailLength: 0.4, // 特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: planePath,
               symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: '#1DE9B6',
                width: 1, // 线条宽度
                opacity: 0.1, // 尾迹线条透明度
                curveness: 0.3, // 尾迹线条曲直度
              },
            },
            data: codes,
          },
          {
            type: 'custom',
            coordinateSystem: 'geo',
            renderItem: function (params, api) {
              //具体实现自定义图标的方法
              return {
                type: 'image',
                style: {
                  image: uploadedDataURL, // 自定义的图片地址
                  x:
                    api.coord([points[params.dataIndex].value[0], points[params.dataIndex].value[1]])[0] -
                    6, // 数据的设置
                  y:
                    api.coord([points[params.dataIndex].value[0], points[params.dataIndex].value[1]])[1] -
                    34,
                },
              };
            },
            zlevel: 10,
            data: points,
          }]
        };

        mapChart.setOption(option, true);

});

document.addEventListener('DOMContentLoaded', function () {
  function loadData(filePath) {
               fetch(filePath)
          .then(response => response.arrayBuffer())
          .then(buffer => {
              const decoder = new TextDecoder('gbk');
              const text = decoder.decode(buffer);
              Papa.parse(text, {
                  header: true,
                  complete: function(results) {
                       var start = results.data.map(function(item) { return item.Dpttm; });
                       // 删除start的第一个数据
                        start.shift();

                        const timeCounts = {};
                        const allPeriods = Array.from({ length: 12 }, (_, i) => {
                            const period = i * 2;
                            return `${String(period).padStart(2, '0')}-${String(period + 1).padStart(2, '0')}`;
                        });

                        // 初始化所有时间段为0
                        allPeriods.forEach(period => {
                            timeCounts[period] = 0;
                        });

                        start.forEach(time => {
                            if (time) {
                                const hour = parseInt(time.substring(0, 2), 10);
                                const period = Math.floor(hour / 2) * 2;
                                const periodLabel = `${String(period).padStart(2, '0')}-${String(period + 1).padStart(2, '0')}`;
                                timeCounts[periodLabel] = (timeCounts[periodLabel] || 0) + 1;
                            }
                        });

                        // 将数据转换为ECharts需要的格式
                        const periods = Object.keys(timeCounts).sort();
                        const counts = periods.map(period => timeCounts[period]);

                        // 调用展示图表的函数
                        displayChart1(periods, counts);

/*------——————————————————————————————————————————————————————————————*/
                        var end = results.data.map(function(item) { return item.Arvtm; });
                       // 删除start的第一个数据
                        end.shift();

                        const timeCounts1 = {};
                        const allPeriods1 = Array.from({ length: 12 }, (_, i) => {
                            const period1 = i * 2;
                            return `${String(period1).padStart(2, '0')}-${String(period1 + 1).padStart(2, '0')}`;
                        });

                        // 初始化所有时间段为0
                        allPeriods1.forEach(period1 => {
                            timeCounts1[period1] = 0;
                        });

                        end.forEach(time => {
                            if (time) {
                                const hour = parseInt(time.substring(0, 2), 10);
                                const period1 = Math.floor(hour / 2) * 2;
                                const periodLabel = `${String(period1).padStart(2, '0')}-${String(period1 + 1).padStart(2, '0')}`;
                                timeCounts[periodLabel] = (timeCounts[periodLabel] || 0) + 1;
                            }
                        });

                        // 将数据转换为ECharts需要的格式
                        const periods1 = Object.keys(timeCounts).sort();
                        const counts1 = periods1.map(period1 => timeCounts[period1]);

                        // 调用展示图表的函数
                        displayChart2(periods1, counts1);
/*------——————————————————————————————————————————————————————————————*/
                         var punctuality = results.data.map(function(item) { return item.Ptalt; });
                        console.log(punctuality);

                        // 删除punctuality的第一个数据
                        punctuality.shift();

                        // 统计各准点率的数量，过滤掉空值（“-”）项
                        const punctualityCounts = {};
                        punctuality.forEach(rate => {
                            if (rate && rate !== '-') {
                                if (punctualityCounts[rate]) {
                                    punctualityCounts[rate] += 1;
                                } else {
                                    punctualityCounts[rate] = 1;
                                }
                            }
                        });

                        // 将统计结果转换为数组并排序
                        const sortedPunctuality = Object.keys(punctualityCounts).map(rate => {
                            return { value: punctualityCounts[rate], name: rate };
                        }).sort((a, b) => b.value - a.value);

                        // 取前5项，其他项合并为“其他”
                        const top5 = sortedPunctuality.slice(0, 5);
                        const others = sortedPunctuality.slice(5).reduce((acc, item) => acc + item.value, 0);
                        if (others > 0) {
                            top5.push({ value: others, name: 'Others' });
                        }

                        // 调用展示图表的函数
                        displayChart3(top5);

/*------——————————————————————————————————————————————————————————————*/
                        var provinces = results.data.map(function(item) { return item.Prvn_Org; });

                        // 删除provinces的第一个数据
                        provinces.shift();

                        // 统计各省起飞的航班数
                        const provinceCounts = {};
                        provinces.forEach(province => {
                            if (province && province !== '-') {
                                if (provinceCounts[province]) {
                                    provinceCounts[province] += 1;
                                } else {
                                    provinceCounts[province] = 1;
                                }
                            }
                        });

                        // 将统计结果转换为数组并排序
                        const sortedProvinces = Object.keys(provinceCounts).map(province => {
                            return { value: provinceCounts[province], name: province };
                        }).sort((a, b) => b.value - a.value);

                        // 取前8项
                        const top8 = sortedProvinces.slice(0, 8);

                        // 准备数据格式
                        const data = top8.map(item => item.value);
                        const labels = top8.map(item => item.name);


                        // 调用展示图表的函数
                        displayBarChart(labels, data);

/*------——————————————————————————————————————————————————————————————*/

                        var flights = results.data.map(function(item) {
                            return {
                                departure: item.Dpttm,
                                arrival: item.Arvtm
                            };
                        });
                        console.log(flights);

                        // 删除flights的第一个数据
                        flights.shift();

                        // 计算飞行时间
                        const flightDurations = flights.map(flight => {
                            if (flight.departure && flight.arrival && flight.departure !== '-' && flight.arrival !== '-') {
                                const departureTime = new Date('1970-01-01T' + flight.departure + ':00Z');
                                const arrivalTime = new Date('1970-01-01T' + flight.arrival + ':00Z');
                                let duration = (arrivalTime - departureTime) / (1000 * 60 * 60); // 以小时为单位

                                // 考虑跨午夜的航班
                                if (duration < 0) {
                                    duration += 24;
                                }

                                return duration;
                            } else {
                                return null;
                            }
                        }).filter(duration => duration !== null);

                        // 统计每个小时区间内的航班数量
                        const durationCounts = {};
                        flightDurations.forEach(duration => {
                            const hour = Math.floor(duration);
                            if (durationCounts[hour]) {
                                durationCounts[hour] += 1;
                            } else {
                                durationCounts[hour] = 1;
                            }
                        });

                        // 准备数据格式
                        const labels1 = Array.from({ length: 8 }, (_, i) => i );
                        const data1 = labels.map((_, i) => durationCounts[i] || 0);

                        // 调用展示图表的函数
                        displayBarChart1(labels1, data1);
                   },

               });

     }) .catch(error => console.error('Error fetching and parsing data:', error));
     }
     loadData('飞机航线信息.csv');
     function displayChart1(periods, counts) {
                // 初始化ECharts实例
                const myChart = echarts.init(document.getElementById('barChart'));

                let name = '航班起飞时间分布'
                let lineColor = "#5AC2DB"
                let areaColor = ['rgba(143, 210, 240, 0.53)', 'rgba(40, 84, 126, 0.14)']
                var option = {
                   grid: {
                        left: '15%',
                        right: '10%',
                        top: '30%',
                        bottom: '15%'
                    },
                   tooltip: {
                      trigger: "axis",
                      axisPointer: {
                         lineStyle: {
                            color: "rgba(255,255,255,0.7)"
                         }
                      },
                      backgroundColor: "rgba(255,255,255,0.1)",
                      padding: [5, 10],
                      textStyle: {
                         color: "rgb(255,255,255)"
                      }
                   },
                   legend: {
                      x: "center",
                      y: "25",
                      icon: "circle",
                      itemWidth: 12,
                      itemHeight: 12,
                      itemGap: 60,
                      textStyle: {
                         color: "#C0C4CC",
                         fontSize: 13,
                         fontWeight: 'bold',
                      },
                      data: ["航班出发时间分布"]
                   },
                   xAxis: {
                      type: "category",
                      data: periods,
                      boundaryGap: true,
                      splitLine: {
                         show: false
                      },
                      axisTick: {
                         show: false
                      },
                      // type: 'dashed',
                      axisLine: {
                         lineStyle: {
                            type: 'dashed',
                            color: "#2557B4"
                         }
                      },
                      axisLabel: {
                         interval: 1,
                         margin: 10,
                         textStyle: {
                            fontSize: 14,
                            color: "#C0C4CC"
                         },
                            formatter: function (value, index) {
                                // 将时间段格式化为标准时间刻度
                                const hour = parseInt(value.substring(0, 2), 10);
                                return `${hour}:00`;
                            }

                      }
                   },
                   yAxis: [
                      {
                         type: "value",
                         position: "left",
                         name: '数量',
                         nameTextStyle: {
                            padding: [0, 0, 0, 0],
                            color: '#C0C4CC',
                            fontSize: 13,
                            fontWeight: 'bold',
                            // lineHeight: 40,
                         },
                         splitLine: {
                            show: false,
                         },
                         axisLine: {
                            show: true,
                            lineStyle: {
                               color: "rgba(255,255,255,0.3)"
                            }
                         },

                         axisLabel: {
                            show: true,
                            margin: 2,
                            textStyle: {
                               fontSize: 12,
                               color: "#DEEBFF"
                            }
                         }
                      },],
                   series: [
                      {
                         name: "航班出发时间分布",
                         type: "line",
                         smooth: true,
                         showSymbol: false,
                         symbol: 'circle',
                         data: counts,
                         itemStyle: {
                            normal: {
                               color: '#287CE8'
                            }
                         },
                         lineStyle: {
                            normal: {
                               width: 3
                            }
                         },
                         markLine: {
                            name: 'aa',
                            // symbol: ['image://' + arrowBj],
                            symbolSize: [12, 6],
                            lineStyle: {
                               type: 'dashed',
                               color: '#287CE8'

                            },

                         },
                          markPoint: {
                                symbol: 'circle',
                                symbolSize: [10, 10], // 容器大小
                                symbolOffset: ['0%', '0%'],
                                data: counts.map((value, index) => ({
                                    value: value,
                                    xAxis: periods[index],
                                    yAxis: value
                                })),
                                label: {
                                    show: true,
                                    position: 'top',
                                    fontSize: 10,
                                    color: '#287CE8',
                                }
                            }
                      }
                   ]
                }

                // 使用配置项生成图表
                myChart.setOption(option);
            }

     function displayChart2(periods, counts) {
                // 初始化ECharts实例
                const myChart = echarts.init(document.getElementById('medalsChart'));

                let name = '进出口货值'
                let lineColor = "#5AC2DB"
                let areaColor = ['rgba(143, 210, 240, 0.53)', 'rgba(40, 84, 126, 0.14)']
                var option = {
                   grid: {
                        left: '15%',
                        right: '10%',
                        top: '30%',
                        bottom: '15%'
                    },
                   tooltip: {
                      trigger: "axis",
                      axisPointer: {
                         lineStyle: {
                            color: "rgba(255,255,255,0.7)"
                         }
                      },
                      backgroundColor: "rgba(255,255,255,0.1)",
                      padding: [5, 10],
                      textStyle: {
                         color: "rgb(255,255,255)"
                      }
                   },
                   legend: {
                      x: "center",
                      y: "25",
                      icon: "circle",
                      itemWidth: 12,
                      itemHeight: 12,
                      itemGap: 60,
                      textStyle: {
                         color: "#C0C4CC",
                         fontSize: 13,
                         fontWeight: 'bold',
                      },
                      data: ["航班抵达时间分布"]
                   },
                   xAxis: {
                      type: "category",
                      data: periods,
                      boundaryGap: true,
                      splitLine: {
                         show: false
                      },
                      axisTick: {
                         show: false
                      },
                      // type: 'dashed',
                      axisLine: {
                         lineStyle: {
                            type: 'dashed',
                            color: "#2557B4"
                         }
                      },
                      axisLabel: {
                         interval: 1,
                         margin: 10,
                         textStyle: {
                            fontSize: 14,
                            color: "#C0C4CC"
                         },
                            formatter: function (value, index) {
                                // 将时间段格式化为标准时间刻度
                                const hour = parseInt(value.substring(0, 2), 10);
                                return `${hour}:00`;
                            }

                      }
                   },
                   yAxis: [
                      {
                         type: "value",
                         position: "left",
                         name: '数量',
                         nameTextStyle: {
                            padding: [0, 0, 0, 0],
                            color: '#C0C4CC',
                            fontSize: 13,
                            fontWeight: 'bold',
                            // lineHeight: 40,
                         },
                         splitLine: {
                            show: false,
                         },
                         axisLine: {
                            show: true,
                            lineStyle: {
                               color: "rgba(255,255,255,0.3)"
                            }
                         },

                         axisLabel: {
                            show: true,
                            margin: 2,
                            textStyle: {
                               fontSize: 12,
                               color: "#DEEBFF"
                            }
                         }
                      },],
                   series: [
                        {
                            name: "航班抵达时间分布",
                            type: "line",
                            smooth: true,
                            showSymbol: false,
                            symbol: 'circle',
                            data: counts,
                            itemStyle: {
                                normal: {
                                    color: '#38FFBA'
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 3
                                }
                            },
                            markLine: {
                                name: 'aa',
                                // symbol: ['image://' + arrowBj],
                                symbolSize: [12, 6],
                                lineStyle: {
                                    type: 'dashed',
                                    color: '#287CE8'
                                },
                            },
                            markPoint: {
                                symbol: 'circle',
                                symbolSize: [10, 10], // 容器大小
                                symbolOffset: ['0%', '0%'],
                                data: counts.map((value, index) => ({
                                    value: value,
                                    xAxis: periods[index],
                                    yAxis: value
                                })),
                                label: {
                                    show: true,
                                    position: 'top',
                                    fontSize: 10,
                                    color: '#38FFBA',
                                }
                            }
                        }
                    ]

                }

                // 使用配置项生成图表
                myChart.setOption(option);
            }
            function displayChart3(data) {
                // 初始化ECharts实例
                const myChart = echarts.init(document.getElementById('categoryChart'));

                // 配置图表的选项
                const option = {
                    title: {
                        text: '航班准点率预测',
                        left: 'center',
                        top: '20px', // 调整图表距离顶部的距离
                        textStyle: {
                            color: '#ADD8E6',  // 设置字体的主颜色为浅蓝色
                            textBorderColor: '#00008B',  // 设置字体边缘的边框颜色为深蓝色
                            textBorderWidth: 2  // 设置边框的宽度
                        }
                    },

                    tooltip: {
                        trigger: 'item'
                    },

                    grid: {
                        left: '15%',
                        right: '15%',
                        top: '30%',
                        bottom: '10%'
                    },

                    series: [
                        {
                            name: 'Punctuality Rate',
                            type: 'pie',
                            radius: '50%',
                            data: data,
                            center: ['50%', '60%'],
                            label: {
                                color: '#1f78b4' // 设置每一项文字的颜色为蓝色系
                            },
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };

                // 使用配置项生成图表
                myChart.setOption(option);
            }
           function displayBarChart(labels, data) {
                // 初始化ECharts实例
                const myChart = echarts.init(document.getElementById('scatterChart'));

                // 配置图表的选项
                const option = {
                    title: {
                        text: '各省起飞航班数',
                        left: 'center',
                        top: '20px', // 调整图表距离顶部的距离
                        textStyle: {
                            color: '#ADD8E6',  // 设置字体的主颜色为浅蓝色
                            textBorderColor: '#00008B',  // 设置字体边缘的边框颜色为深蓝色
                            textBorderWidth: 2  // 设置边框的宽度
                        }
                    },
                    grid: {
                        left: '15%',
                        right: '15%',
                        top: '30%',
                        bottom: '20%'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: labels,
                        axisLabel: {
                            interval: 0,
                            rotate: 30
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: 'Number of Flights',
                        splitLine: { // 配置分隔线
                            show: false // 隐藏分隔线
                        }
                    },
                    series: [{
                        data: data,
                        type: 'bar'
                    }]
                };

                // 使用配置项生成图表
                myChart.setOption(option);
            }
          function displayBarChart1(labels, data) {
                // 初始化ECharts实例
                const myChart = echarts.init(document.getElementById('w'));

                // 配置图表的选项
                const option = {
                    title: {
                        text: '航班飞行时间统计',
                        left: 'center',
                        top: '20px', // 调整图表距离顶部的距离
                        textStyle: {
                            color: '#ADD8E6',  // 设置字体的主颜色为浅蓝色
                            textBorderColor: '#00008B',  // 设置字体边缘的边框颜色为深蓝色
                            textBorderWidth: 2  // 设置边框的宽度
                        }
                    },
                    grid: {
                        left: '15%',
                        right: '15%',
                        top: '30%',
                        bottom: '20%'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: labels,
                        boundaryGap: true, // 让柱状条展示在刻度之间
                        axisLabel: {
                            interval: 0,
                            rotate: 0,
                            padding: [0, 22, 0, 0] // 调整第一个值来往左移动刻度标签
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '航班数量',
                        splitLine: {
                            show: false // 隐藏等值线
                        }
                    },
                    series: [{
                        data: data,
                        type: 'bar',
                        barGap: '30%', // 控制柱状条之间的间距
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#00c9ff' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#92FE9D' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    }]
                };

                // 使用配置项生成图表
                myChart.setOption(option);
            }
            const flightFrequencyData = [
                { "name": "1", "value": 3705 },
                { "name": "2", "value": 3354 },
                { "name": "3", "value": 7841 },
                { "name": "4", "value": 6485 },
                { "name": "5", "value": 1871 },
                { "name": "6", "value": 2679},
                { "name": "7", "value": 11253 }
            ];
            function displayBarChart2(data) {
                // 初始化ECharts实例
                const myChart = echarts.init(document.getElementById('e'));

                // 配置图表的选项
                const option = {
                    title: {
                        text: '航班每周飞行次数统计',
                        left: 'center',
                        top: '20px', // 调整图表距离顶部的距离
                        textStyle: {
                            color: '#ADD8E6',  // 设置字体的主颜色为浅蓝色
                            textBorderColor: '#00008B',  // 设置字体边缘的边框颜色为深蓝色
                            textBorderWidth: 2  // 设置边框的宽度
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '15%',
                        right: '15%',
                        top: '30%',
                        bottom: '20%'
                    },
                    xAxis: {
                        type: 'value',
                        name: '航班数',
                        splitLine: {
                            show: false // 隐藏等值线
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: data.map(item => item.name),
                        name: '每周飞行次数',
                        axisLabel: {
                            interval: 0,
                            rotate: 0
                        }
                    },
                    series: [{
                        data: data.map(item => item.value),
                        type: 'bar',
                        barGap: '30%', // 控制柱状条之间的间距
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: '#0000FF' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#800080' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    }]
                };

                // 使用配置项生成图表
                myChart.setOption(option);
            }

            displayBarChart2(flightFrequencyData);




});
var mapChart1 = echarts.init(document.getElementById('mainMap1'));
$.getJSON('china.json', function (data) {
    echarts.registerMap('china', data);

 // 省份机场数量数据，可以根据实际情况修改
var data = [
    {name: '北京市', value: 2},
    {name: '天津市', value: 1},
    {name: '上海市', value: 2},
    {name: '重庆市', value: 5},
    {name: '河北省', value: 6},
    {name: '山西省', value: 7},
    {name: '辽宁省', value: 8},
    {name: '吉林省', value: 6},
    {name: '黑龙江省', value: 13},
    {name: '江苏省', value: 9},
    {name: '浙江省', value: 7},
    {name: '安徽省', value: 6},
    {name: '福建省', value: 6},
    {name: '江西省', value: 7},
    {name: '山东省', value: 10},
    {name: '河南省', value: 4},
    {name: '湖北省', value: 8},
    {name: '湖南省', value: 9},
    {name: '广东省', value: 9},
    {name: '海南省', value: 4},
    {name: '四川省', value: 16},
    {name: '贵州省', value: 11},
    {name: '云南省', value: 15},
    {name: '陕西省', value: 5},
    {name: '甘肃省', value: 9},
    {name: '青海省', value: 7},
    {name: '台湾省', value: 9},
    {name: '内蒙古自治区', value: 19},
    {name: '广西壮族自治区', value: 8},
    {name: '西藏自治区', value: 5},
    {name: '宁夏回族自治区', value: 3},
    {name: '新疆维吾尔自治区', value: 25},
    {name: '香港特别行政区', value: 2},
    {name: '澳门特别行政区', value: 1}
];


option = {
    title: {
        text: '各省份机场数量',
        left: 'center',
        top: '120px', // 调整图表距离顶部的距离
        textStyle: {
            color: '#ADD8E6',  // 设置字体的主颜色为浅蓝色
            textBorderColor: '#00008B',  // 设置字体边缘的边框颜色为深蓝色
            textBorderWidth: 2  // 设置边框的宽度
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} (个)'
    },
    visualMap: {
        show: false, // 隐藏 visualMap
        min: 0,
        max: 20,
        inRange: {
            color: ['#e0f3f8', '#0868ac'] // 颜色范围
        }
    },
    series: [
        {
            name: '机场数量',
            type: 'map',
            map: 'china',
            roam: false,
            label: {
                show: true
            },
            data: data,
            itemStyle: {
                normal: {
                    areaColor: '#e0f3f8',
                    borderColor: '#000000',
                },
                emphasis: {
                    areaColor: '#0868ac'
                }
            }
        }
    ]
};

        mapChart1.setOption(option, true);

});


const chart1 = echarts.init(document.getElementById('chart1'));
 const dataSource = [25,19,16,15,13,11,10];
 const nameList = ["新疆","内蒙古","四川","云南","黑龙江","贵州","山东"];
  const isRedList =new Array(dataSource.length).fill(0);
  const max = Math.max(...dataSource,1)
  const getSymbolData = (datas) => {
    let arr = [];
    for (var i = 0; i < datas.length; i++) {
      isRedList[i] = max
       arr.push({
          value: datas[i],
          symbolPosition: "end",
       });
    }
    return arr;
 };
option = {
title: {
                        text: '机场较多的省份',
                        left: 'center',
                        top: '20px', // 调整图表距离顶部的距离
                        textStyle: {
                            color: '#ADD8E6',  // 设置字体的主颜色为浅蓝色
                            textBorderColor: '#00008B',  // 设置字体边缘的边框颜色为深蓝色
                            textBorderWidth: 2  // 设置边框的宽度
                        }
                    },
    tooltip: {
      trigger: 'axis',
      padding:15,
        axisPointer: {
          type: 'shadow',//cross
          label: {
            show: true,
            backgroundColor: '#333333',
          },
        },
        backgroundColor: 'rgba(10,26,52,0.7)', // 提示框浮层的背景颜色。
        borderRadius:15,
        textStyle: { // 提示框浮层的文本样式。
          color:"#fff"
        },
        extraCssText:'box-shadow: 0 2px 25px #5cc0fd inset;text-align: center',
        formatter:'{b}<br />{a}:{c}'
    },
    grid: {
                        left: '15%',
                        right: '15%',
                        top: '30%',
                        bottom: '20%'
                    },
    xAxis: {
      data: nameList||[],
      type: 'category',
      axisLabel: {
        show: true,
        fontSize: 12,
        interval: 0,
        textStyle: {
          color: 'rgba(172, 201, 226, 1)',
        },
        //rotate: 30,
      },
      axisTick: {
        show: true,

      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(200, 225, 246, 1)',
          type: 'solid',
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(47, 248, 252, 0.1)',
        },
      },
    },
    yAxis: [
      {
        nameTextStyle: {
          color: '#EEE',
          fontSize: 12,
        },
        // name: '条',
        splitNumber:3,
        max,
        type: 'value',
        axisLabel: {
          show: true,
          showMaxLabel:true,
          fontSize: 12,
          textStyle: {
            color: 'rgba(172, 201, 226, 1)',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(47, 248, 252, 0.3)',
            type: 'solid',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(160, 222, 255, 1)',
            type:'dashed',
            opacity:0.2
          },
        },
      },
    ],
    series: [
      {
        name: '工单数量',
        type: 'bar',
        barWidth: 25,
        label: {
          show: true,
          position: 'top',
          distance: 2,
          color: 'rgba(0, 166, 255, 1)',
          fontWeight: 'bolder',
          fontSize:nameList.length>20? 9:12,
        },
        itemStyle: {
          normal: {
            borderWidth:2,
            borderColor:'rgba(0, 166, 255, 1)',
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(0, 166, 255, 0.1)'
              },
              {
                  offset: 0.5,
                  color: 'rgba(0, 166, 255, 0.3)'
              },
              {
                  offset: 1,
                  color: 'rgba(0, 166, 255, 0.5)'
              },
            ]),
          },
        },
        data: dataSource||[],
      },
      {
        type: "pictorialBar",
        symbol: "react",
        symbolSize: [25, 3],
        symbolOffset: [0, -2],
        z: 12,
        itemStyle: {
           color: "rgba(252, 194, 50, 1)",
           shadowColor:'rgba(252, 194, 50, 1)',
           shadowBlur: 20
        },
        data: getSymbolData(dataSource),
     },
     {

      type: 'bar',
      barWidth: 29,
      barGap: '-108%',
      data: isRedList,
      tooltip: {
        backgroundColor: 'transparent',
        formatter: ' ',
      },
      itemStyle: {
        normal: {
          color: 'rgba(200,225,246,0.1)',
        },
      },
      zlevel: 7,
    }
    ],
  }
  chart1.setOption(option, true);


  //——————————————————————————————————————————————————————————————————————————————//
  const chart2 = echarts.init(document.getElementById('chart2'));
   let list = [
    { percent: 17, name: "南方航空", value: 2552 },
    { percent: 12.46, name: "东方航空", value: 1862 },
    { percent: 9.64, name: "中国国航", value: 1440 },
    { percent: 7.9, name: "深圳航空", value: 1183 },
    { percent: 6.7, name: "厦门航空", value: 1000 },
    { percent: 46.3, name: "其它", value: 6904 }
]
let sum = list.reduce((cur, pre) => {
    return cur + pre.value;
}, 0);
var nameArray = list.map(item => {
    return item.name + '\t\t\t' + item.value + '个' + '\t\t\t' + item.percent + '%'
})

var color = ['#36F097', '#3DFFDC', '#5A3FFF', '#268AFF', '#1ED6FF', '#ADE1FF']
var data = [];
for (var i = 0; i < list.length; i++) {
    data.push({
        value: list[i].value,
        name: list[i].name + '\t\t\t' + list[i].value + '个' + '\t\t\t' + list[i].percent + '%',
        itemStyle: {
            borderWidth: 6,
            borderColor: color[i],
        }
    });
}
option = {
    color: color,
    tooltip: {
        trigger: 'item'
    },
    title: {
        text: sum,
        subtext: '总航班数',
        left: '22%',
        top: '43%',
        textAlign :'center',
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
        subtextStyle: {
            fontSize: 9,
            color: 'rgba(255, 255, 255, 0.60)'
        },
    },
    legend: [{
        orient: 'vertical',
        data: nameArray,
        icon: 'rect',
        left: 'right',
        top: 'center',
        align: 'left',
        itemGap: 8,
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
        //图例标记的图形高度
        itemHeight: 8,
        //图例标记的图形宽度
        itemWidth: 8,
    }],
    series: [{
        name: '',
        type: 'pie',
        clockwise: false,
        radius: ['70%', '90%'],
        width: "80%",
        height: "55%",
        emphasis: {
            scale: false
        },
        center: ['30%', '50%'],
        top: "center",
        label: {
            show: false,
            position: 'inside',
            color: '#fff',
            formatter: function (params) {
                console.log(params)
                return params.percent + '%'
            }
        },
        data: data
    }]
};

        // 使用指定的配置项和数据显示图表
  chart2.setOption(option)


  //——————————————————————————————————————————————————————————————//
   const chart3 = echarts.init(document.getElementById('chart3'));
  var data = [
        {
         "name": "ERJ-190",
         "value": 678
      },
            {
         "name": "空客321",
         "value": 787
      },

        {
         "name": "JET",
         "value": 987
      },
            {
         "name": "空客319",
         "value": 1278
      },
      {
         "name": "空客320",
         "value": 3697
      },

      {
         "name": "波音737",
         "value": 6243
      },


   ],
   names = [], values = [];
data.forEach((item, index) => {
   names.push(item.name);
   values.push(item.value);
})

option = {
title: {
                        text: '飞机各机型数量排名',
                        left: 'center',
                        top: '20px', // 调整图表距离顶部的距离
                        textStyle: {
                            color: '#ADD8E6',  // 设置字体的主颜色为浅蓝色
                            textBorderColor: '#00008B',  // 设置字体边缘的边框颜色为深蓝色
                            textBorderWidth: 2  // 设置边框的宽度
                        }
                    },
   tooltip: {
      trigger: 'axis',
      axisPointer: {
         type: 'shadow'
      }
   },
grid: {
                        left: '25%',
                        right: '10%',
                        top: '30%',
                        bottom: '15%'
                    },
   xAxis: {
      type: 'value',
      splitNumber: 3,
      axisTick: {
         show: false
      },
      axisLine: {
         show: false
      },
      axisLabel: {
         textStyle: {
            color: "#fff",
            fontSize: 14
         }
      },
      splitLine: {
         show: false
      }
   },
   yAxis: {
      type: 'category',
      data: names,
      axisTick: {
         show: false,
         alignWithLabel: true
      },
      axisLine: {
         show: false
      },
      axisLabel: {
         interval: 0,
         // rotate: 30,
         textStyle: {
            color: "#fff",
            fontSize: 14
         }
      },
      splitLine: {
         show: false
      }
   },
   series: [{
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
         color: 'rgba(180, 180, 180, 0.2)'
      },
      itemStyle: {
         borderRadius: 10,
         color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
               { offset: 0, color: '#347CDD' }, // 0% 处的颜色
               { offset: 1, color: '#56fb93' } // 100% 处的颜色
            ],
            global: false // 缺省为 false
         }
      },
      label: {
         show: true,
         position: 'right',
         color: '#fff',
         fontSize: 14
      },
      data: values
   }]
}
chart3.setOption(option)

//——————————————————————————————————————————————-
const chart4 = echarts.init(document.getElementById('chart4'));
option = {
      title: {
                        text: '近6年我国机场总数变化',
                        left: 'center',
                        top: '20px', // 调整图表距离顶部的距离
                        textStyle: {
                            color: '#ADD8E6',  // 设置字体的主颜色为浅蓝色
                            textBorderColor: '#00008B',  // 设置字体边缘的边框颜色为深蓝色
                            textBorderWidth: 2  // 设置边框的宽度
                        }
                    },
        grid: {
                        left: '15%',
                        right: '10%',
                        top: '30%',
                        bottom: '15%'
                    },
        tooltip: {
            show: true,
            trigger: 'axis',
            padding:[0,0,0,0],
            axisPointer: {
                lineStyle: {
                    width: 1,
                    type:'solid',
                    color:'#00D1FF'
                }
            },
            backgroundColor: 'transparent',
            borderColor:'transparent',
            shadowColor:'transparent',
            formatter: (val)=> {
                return `<div class="" style="width:150px;height:55px; background:url(https://s1.ax1x.com/2023/06/16/pCMGC9A.png) no-repeat;background-size:contain;padding:5px 10px;">
                              <p style="font-size:12px;color:rgba(214, 243, 255, 0.9);display:flex;align-items: center ;margin-top:0px">
                                  <span style="display:inline-block;width: 4px;height: 4px;border-radius:50%;background:#00FFFF;margin-right:5px;"></span> ${val[0].name}
                              </p>
                              <p style="font-size:12px;color:rgba(214, 243, 255, 0.9);display:flex;align-items: center; margin-top:5px">
                                  数量
                                  <span style="font-family: 'DIN'; font-size:16px;margin-left:5px;">${val[0].data}</span>
                              </p>
                         </div>`
              },
        },

        textStyle:{
            color:'rgba(221,247,255,0.7)',
        },
        xAxis: [{
            type: 'category',
            data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            axisLine: {
                lineStyle: {
                    color: '#96A9B7',
                    type:'dashed'//虚线
                }
            },
            axisTick: {
                show: false
            },

        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#96A9B7'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#96A9B7',
                    type:'dashed'//虚线
                }
            }
        }],
        series: [{
                type: 'line',
                data: [224, 235, 235, 241, 248, 254, 259],
                smooth: true,
                yAxisIndex: 0,
                symbol: 'circle',
                symbolSize: 6,
                showSymbol:false,
                hoverAnimation:true,
                itemStyle: {
                    color: "#fff",
                    borderColor: "#00FFFF",
                    borderWidth: 2,

                },
                lineStyle:{
                    normal: {
                        borderWidth: 5,
                        color: {
                            colorStops: [{
                                    offset: 0,
                                    color: '#00FFFF00'
                                },

                                {
                                    offset: 0.5,
                                    color: '#00FFFF'
                                },
                                {
                                    offset: 1,
                                    color: '#00FFFF00'
                                }
                            ],
                        }
                    }
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#00FFFF"
                            },
                            {
                                offset: 1,
                                color: "rgba(0, 255, 255, 0)"
                            }
                        ], false),
                        shadowColor: 'rgba(0, 255, 255, 0.5)', //阴影颜色
                        shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                    }
                },
            }

        ]
    };
chart4.setOption(option)