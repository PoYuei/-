import pandas as pd

# 读取Excel文件
file_path = '飞机航线信息.csv'
df = pd.read_csv(file_path, encoding='gbk')

# 提取'Prvn_Org'和'Dstntcty'两列
df_filtered = df[['Prvn_Org', 'Dstntcty']]

# 筛选出发城市为北京的航班
beijing_flights = df_filtered[df_filtered['Prvn_Org'] == '北京市']

# 统计飞往城市的次数
destination_counts = beijing_flights['Dstntcty'].value_counts()

# 获取飞往次数前10的城市
top_10_destinations = destination_counts.head(10)

# 输出结果
print("北京飞往次数前10的城市:")
print(top_10_destinations)
