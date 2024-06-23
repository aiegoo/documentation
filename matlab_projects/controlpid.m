Kp = 21;
Ki = 500;
Kd = 0.05;
for i = 1:3
 C(:,:,i) = pid(Kp,Ki,Kd);
 Kd = Kd + 0.1;
end
sys_cl = feedback(C*P_motor,1);
t = 0:0.001:0.1;
step(sys_cl(:,:,1), sys_cl(:,:,2), sys_cl(:,:,3), t)
ylabel('Position, \theta (radians)')
title(' Response to a step reference with K_p = 21, K_i =500 and different values of K_d')
legend('Kd = 0.05', 'Kd = 0.15', 'Kd = 0.25')
dist_cl = feedback(P_motor,C);
t = 0:0.001:0.2;
step(dist_cl(:,:,1), dist_cl(:,:,2), dist_cl(:,:,3), t)
ylabel('Position, \theta (radians)')
title('Response to a step reference with K_p = 21, K_i =500 and different values of K_d')
legend('Kd = 0.05', 'Kd = 0.15', 'Kd = 0.25')
stepinfo(sys_cl(:,:,2))