import matplotlib.pyplot as plt
import numpy as np

def plot_standard_basis():
    fig, ax = plt.subplots()
    ax.quiver(0, 0, 1, 0, angles='xy', scale_units='xy', scale=1, color='r', label=r'$\mathbf{e}_x = (1, 0)$')
    ax.quiver(0, 0, 0, 1, angles='xy', scale_units='xy', scale=1, color='b', label=r'$\mathbf{e}_y = (0, 1)$')
    ax.set_xlim(-0.5, 1.5)
    ax.set_ylim(-0.5, 1.5)
    ax.axhline(0, color='black',linewidth=0.5)
    ax.axvline(0, color='black',linewidth=0.5)
    ax.grid(color = 'gray', linestyle = '--', linewidth = 0.5)
    ax.legend()
    plt.title('標準基底')
    plt.xlabel('x')
    plt.ylabel('y')
    plt.savefig('standard_basis.png')
    plt.show()

plot_standard_basis()