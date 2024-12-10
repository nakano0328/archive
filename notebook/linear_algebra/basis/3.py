import matplotlib.pyplot as plt
import numpy as np

def plot_coordinate_transformation():
    fig, ax = plt.subplots()
    ax.quiver(0, 0, 1, 1, angles='xy', scale_units='xy', scale=1, color='r', label=r'$\mathbf{b}_1 = (1, 1)$')
    ax.quiver(0, 0, 1, -1, angles='xy', scale_units='xy', scale=1, color='b', label=r'$\mathbf{b}_2 = (1, -1)$')
    ax.quiver(0, 0, 2, 2, angles='xy', scale_units='xy', scale=1, color='g', label=r'$(2, 2)$ in standard basis')
    ax.quiver(0, 0, 2, 0, angles='xy', scale_units='xy', scale=1, color='purple', label=r'$2\mathbf{b}_1$')
    ax.quiver(2, 0, 0, 2, angles='xy', scale_units='xy', scale=1, color='orange', label=r'$2\mathbf{b}_2$')
    ax.set_xlim(-1.5, 3)
    ax.set_ylim(-1.5, 3)
    ax.axhline(0, color='black',linewidth=0.5)
    ax.axvline(0, color='black',linewidth=0.5)
    ax.grid(color = 'gray', linestyle = '--', linewidth = 0.5)
    ax.legend()
    plt.title('座標変換')
    plt.xlabel('x')
    plt.ylabel('y')
    plt.savefig('coordinate_transformation.png')
    plt.show()

plot_coordinate_transformation()