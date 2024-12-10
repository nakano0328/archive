import matplotlib.pyplot as plt
import numpy as np

def plot_new_basis():
    fig, ax = plt.subplots()
    ax.quiver(0, 0, 1, 1, angles='xy', scale_units='xy', scale=1, color='r', label=r'$\mathbf{b}_1 = (1, 1)$')
    ax.quiver(0, 0, 1, -1, angles='xy', scale_units='xy', scale=1, color='b', label=r'$\mathbf{b}_2 = (1, -1)$')
    ax.set_xlim(-1.5, 1.5)
    ax.set_ylim(-1.5, 1.5)
    ax.axhline(0, color='black',linewidth=0.5)
    ax.axvline(0, color='black',linewidth=0.5)
    ax.grid(color = 'gray', linestyle = '--', linewidth = 0.5)
    ax.legend()
    plt.title('新しい基底')
    plt.xlabel('x')
    plt.ylabel('y')
    plt.savefig('new_basis.png')
    plt.show()

plot_new_basis()