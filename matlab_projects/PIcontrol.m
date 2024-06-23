Kp = 21;
Ki = 100;
for i = 1:5
 C(:,:,i) = pid(Kp,Ki);
 Ki = Ki + 200;
end
sys_cl = feedback(C*P_motor,1);
t = 0:0.001:0.4;
step(sys_cl(:,:,1), sys_cl(:,:,2), sys_cl(:,:,3), t)
ylabel('Position, \theta (radians)')
title(' Response to a step reference with K_p = 21 and different values of K_i')
legend('Ki = 100', 'Ki = 300', 'Ki = 500')
