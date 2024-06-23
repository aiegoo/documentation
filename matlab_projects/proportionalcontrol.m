
J = 3.2284E-6;
b = 3.5077E-6;
K = 0.0274;
R = 4;
L = 2.75E-6;
s = tf('s');
P_motor = K/(s*((J*s+b)*(L*s+R)+K^2));
Kp = 1;
for i = 1:3
 C(:,:,i) = pid(Kp);
 Kp = Kp + 10;
end
sys_cl = feedback(C*P_motor,1);
t = 0:0.001:0.2;
step(sys_cl(:,:,1), sys_cl(:,:,2), sys_cl(:,:,3), t)
ylabel('Position, \theta (radians)')
title(' Response to a step reference with different K_p values')
legend('Kp = 1', 'Kp = 11', 'Kp = 21')
dist_cl = feedback(P_motor,C);
step(dist_cl(:,:,1), dist_cl(:,:,2), dist_cl(:,:,3), t)
ylabel('Position, \theta (radians)')
title(' Response to a progressive disturbance with different values of K_p')
legend('Kp = 1', 'Kp = 11','Kp = 21')
