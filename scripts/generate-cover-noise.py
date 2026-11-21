"""Seeded multi-scale value noise with domain warping; no image dependencies."""
import math, random, struct, zlib
from pathlib import Path
W,H=1200,675
OUT=Path(__file__).resolve().parents[1]/'public/covers'
def field(rng,nx,ny):
 grid=[[rng.random() for _ in range(nx+1)] for _ in range(ny+1)]
 def sample(x,y):
  x=max(0,min(.999999,x))*nx;y=max(0,min(.999999,y))*ny;i,j=int(x),int(y);u,v=x-i,y-j;u=u*u*(3-2*u);v=v*v*(3-2*v)
  return (grid[j][i]*(1-u)+grid[j][i+1]*u)*(1-v)+(grid[j+1][i]*(1-u)+grid[j+1][i+1]*u)*v
 return sample
def rgb(h):return tuple(int(h[i:i+2],16) for i in (1,3,5))
configs=[('forest',83,(5,3),['#081912','#203f30','#527863','#b0c9ad']),('indigo',217,(3,5),['#060e20','#17334f','#527995','#adc5d1']),('clay',591,(6,3),['#110b17','#372137','#81546c','#c4a8bb']),('rose',1049,(4,5),['#1d1020','#543142','#ab7377','#e1bca4']),('ochre',372,(7,2),['#191610','#47422b','#8e8055','#d6c49b'])]
for name,seed,dims,palette in configs:
 rng=random.Random(seed);a=field(rng,*dims);b=field(rng,dims[0]*2,dims[1]*2);warp=field(rng,3,3);detail=field(rng,19,13);colors=list(map(rgb,palette));rows=[]
 for iy in range(H):
  row=bytearray([0]);y=iy/(H-1)
  for ix in range(W):
   x=ix/(W-1);q=warp(x,y)-.5;u=max(0,min(1,x+.22*q));v=max(0,min(1,y+.2*math.sin(q*5+x*3)))
   n=.69*a(u,v)+.25*b(u,v)+.06*detail(x,y)
   t=max(0,min(.99999,(n-.20)*1.6));t=t*t*(3-2*t);f=t*3;i=min(2,int(f));f-=i
   grain=rng.gauss(0,1.25)
   row.extend(max(0,min(255,round(colors[i][c]*(1-f)+colors[i+1][c]*f+grain))) for c in range(3))
  rows.append(row)
 def chunk(t,d):return struct.pack('>I',len(d))+t+d+struct.pack('>I',zlib.crc32(t+d)&0xffffffff)
 data=b'\x89PNG\r\n\x1a\n'+chunk(b'IHDR',struct.pack('>IIBBBBB',W,H,8,2,0,0,0))+chunk(b'IDAT',zlib.compress(b''.join(rows),6))+chunk(b'IEND',b'')
 (OUT/f'{name}-noise.png').write_bytes(data);print(name,flush=True)
