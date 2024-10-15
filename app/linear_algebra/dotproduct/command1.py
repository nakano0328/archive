import matplotlib.pyplot as plt
import numpy as np

# ベクトルの定義
a = np.array([1, 3])
b = np.array([5, 1])

# グラフの設定
plt.figure()
plt.quiver(0, 0, a[0], a[1], angles='xy', scale_units='xy', scale=1, color='r', label='Vector a')
plt.quiver(0, 0, b[0], b[1], angles='xy', scale_units='xy', scale=1, color='b', label='Vector b')

# 軸の設定
plt.xlim(0, 6)
plt.ylim(0, 6)
plt.grid(True)
plt.axhline(0, color='black',linewidth=0.5)
plt.axvline(0, color='black',linewidth=0.5)

# ラベルと凡例の設定
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.legend()
plt.title('Vectors a and b')

# グラフを表示
plt.show()
