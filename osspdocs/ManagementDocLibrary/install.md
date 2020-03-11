http://www.gluster.org/

#下载

yum install nfs-utils psmisc portmap lvm2 rsyslog-mmjsonparse

wget http://mirror.centos.org/centos/6/os/x86_64/Packages/libaio-0.3.107-10.el6.x86_64.rpm

#安装
rpm -ivh --replacefiles glusterfs-libs-3.6.2-1.el7.x86_64.rpm
rpm -ivh --replacefiles glusterfs-3.6.2-1.el7.x86_64.rpm glusterfs-api-3.6.2-1.el7.x86_64.rpm
rpm -ivh --replacefiles glusterfs-fuse-3.6.2-1.el7.x86_64.rpm
rpm -ivh --replacefiles glusterfs-cli-3.6.2-1.el7.x86_64.rpm
rpm -ivh --replacefiles glusterfs-server-3.6.2-1.el7.x86_64.rpm


#########################################################################################################################
#########################################################################################################################

#10.1.36.220 配置
service glusterd start
gluster peer probe 10.1.36.220

#创建文件夹
mkdir /var/local/webroot
mkdir /var/local/webresource

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++创建Volume+++++++++++++++++++++++++++++++++++++++++++++++++++++++10.1.36.220
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#WebRootVolume
gluster volume create WebRootVolume 10.1.36.220:/var/local/webroot
#WebResourceVolume
gluster volume create WebResourceVolume 10.1.36.220:/var/local/webresource

#启动
gluster volume start WebRootVolume
gluster volume start WebResourceVolume

#状态
gluster volume info

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++挂载Volume++++++++++++++++++++++++++++++++++++++++++++++++++++++10.1.36.221
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
mkdir /var/local/webroot
mkdir /var/local/webresource
#WebRootVolume
mount.glusterfs 10.1.36.220:/WebRootVolume /var/local/webroot
#WebResourceVolume
mount.glusterfs 10.1.36.220:/WebResourceVolume /var/local/webresource

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++挂载Volume++++++++++++++++++++++++++++++++++++++++++++++++++++++10.1.36.230
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
mkdir /var/local/webroot
mkdir /var/local/webresource
#WebRootVolume
mount.glusterfs 10.1.36.220:/WebRootVolume /var/local/webroot
#WebResourceVolume
mount.glusterfs 10.1.36.220:/WebResourceVolume /var/local/webresource


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++挂载Volume++++++++++++++++++++++++++++++++++++++++++++++++++++++10.1.36.231
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
mkdir /var/local/webroot
mkdir /var/local/webresource
#WebRootVolume
mount.glusterfs 10.1.36.220:/WebRootVolume /var/local/webroot
#WebResourceVolume
mount.glusterfs 10.1.36.220:/WebResourceVolume /var/local/webresource

#########################################################################################################################
#########################################################################################################################

#10.1.36.230 配置
service glusterd start
gluster peer probe 10.1.36.230

#创建文件夹
mkdir /var/local/appsource
mkdir /var/local/webdeploy

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++创建Volume+++++++++++++++++++++++++++++++++++++++++++++++++++++++10.1.36.230
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#AppSourceVolume
gluster volume create AppSourceVolume 10.1.36.230:/var/local/appsource
#WebDeployVolume
gluster volume create WebDeployVolume 10.1.36.230:/var/local/webdeploy

#启动
gluster volume start AppSourceVolume
gluster volume start WebDeployVolume


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++挂载Volume++++++++++++++++++++++++++++++++++++++++++++++++++++++10.1.36.231
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
mkdir /var/local/appsource
mkdir /var/local/webdeploy
#AppSourceVolume
mount.glusterfs 10.1.36.230:/AppSourceVolume /var/local/appsource
#WebDeployVolume
mount.glusterfs 10.1.36.230:/WebDeployVolume /var/local/webdeploy




#########################################################################################################################
#########################################################################################################################
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++卸载+++++++++++++++++++++++++++++++++++++++++++++++++++++++10.1.36.220
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
#停止
gluster volume stop WebRootVolume
gluster volume stop WebResourceVolume

#删除
gluster volume delete WebRootVolume
gluster volume delete WebResourceVolume

#停止服务
/etc/init.d/glusterd stop

#客户端解除挂载
umount 10.1.36.220:/WebRootVolume 
umount 10.1.36.220:/WebResourceVolume 

#常见问题
#{path} or a prefix of it is already part of volume
#有时候在增加volume时(3.3.1版本)，出现这个打印，导致无法新增volume(原因未知，据说是BUG)
#解决的办法是：
setfattr -x trusted.glusterfs.volume-id $brick_path
setfattr -x trusted.gfid $brick_path
rm -rf $brick_path/.glusterfs
#注：$brick_path为brick的存储路径

