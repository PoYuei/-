import pandas as pd

# 读取Excel文件
file_path = '飞机航线信息.csv'
df = pd.read_csv(file_path, encoding='gbk')

# 提取'Prvn_Org'和'Dstntcty'两列
df_filtered = df[['Prvn_Org', 'Dstntcty']]

# 筛选出发城市为北京的航班
beijing_flights = df_filtered[df_filtered['Prvn_Org'] == '北京市']

# 获取北京能到达的所有城市列表（去重）
destination_cities = beijing_flights['Dstntcty'].unique().tolist()

# 统计北京起飞的航班总数
total_flights_from_beijing = beijing_flights.shape[0]

# 输出结果
print("北京的飞机能到达的其它所有城市列表:")
print(destination_cities)
print("\n北京起飞的航班总数:")
print(total_flights_from_beijing)
