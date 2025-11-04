<template>
  <div class="contentsContainer">
    <div class="circleContainer">
      <circ class="circleText"> SI-Bench </circ>
    </div>
    <div class="connect">
      <div class="line"></div>
      <div class="horizontolLine"></div>
    </div>
    <div class="taskContainer">
      <div class="taskItemContainer">
        <div class="line"></div>
        <div class="task" @click="scrollTo('1-1')">物体理解</div>
        <div class="line"></div>
        <div class="subTaskGroup">
          <div class="subTask" @click="scrollTo('1-1')">物体大小估计</div>
          <div class="subTask" @click="scrollTo('1-2')">物体属性识别</div>
          <div class="subTask" @click="scrollTo('1-3')">物体可供性识别</div>
        </div>
      </div>
      <div class="taskItemContainer">
        <div class="line"></div>
        <div class="task" @click="scrollTo('2-1')">场景理解</div>
        <div class="line"></div>
        <div class="subTaskGroup">
          <div class="subTask" @click="scrollTo('2-1')">视觉定位</div>
          <div class="subTask" @click="scrollTo('2-2')">面积估计</div>
          <div class="subTask" @click="scrollTo('2-3')">绝对距离</div>
          <div class="subTask" @click="scrollTo('2-4')">场景类别识别</div>
        </div>
      </div>
      <div class="taskItemContainer">
        <div class="line"></div>
        <div class="task" @click="scrollTo('3-1')">空间关系理解</div>
        <div class="line"></div>
        <div class="subTaskGroup">
          <div class="subTask" @click="scrollTo('3-1')">物体计数</div>
          <div class="subTask" @click="scrollTo('3-2')">相对方向</div>
          <div class="subTask" @click="scrollTo('3-3')">相对距离</div>
          <div class="subTask" @click="scrollTo('3-4')">空间状态记忆</div>
        </div>
      </div>
      <div class="taskItemContainer">
        <div class="line"></div>
        <div class="task" @click="scrollTo('4-1')">时空关系理解</div>
        <div class="line"></div>
        <div class="subTaskGroup">
          <div class="subTask" @click="scrollTo('4-1')">出现顺序</div>
          <div class="subTask" @click="scrollTo('4-2')">动作理解</div>
          <div class="subTask" @click="scrollTo('4-3')">状态变化理解</div>
        </div>
      </div>
      <div class="taskItemContainer">
        <div class="line"></div>
        <div class="task" @click="scrollTo('5-1')">空间推理</div>
        <div class="line"></div>
        <div class="subTaskGroup">
          <div class="subTask" @click="scrollTo('5-1')">路径规划</div>
          <div class="subTask" @click="scrollTo('5-2')">空间因果预测</div>
        </div>
      </div>
      <div class="taskItemContainer">
        <div class="line"></div>
        <div class="task" @click="scrollTo('6-1')">时空推理</div>
        <div class="line"></div>
        <div class="subTaskGroup">
          <div class="subTask" @click="scrollTo('6-1')">时空因果预测</div>
          <div class="subTask" @click="scrollTo('6-2')">动态物理预测</div>
        </div>
      </div>
    </div>
    <!-- <div class="connect">
      <div class="lineGroup">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div> -->
    <!-- <div class="subTaskContainer"></div> -->
  </div>
  <div class="qandaContainer">
    <div class="qandaItemContainer" id="1-1">
      <div class="mainTaskBlockTitle">物体理解</div>
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        物体大小估计
        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：arkitscenes、scannet、scannet++、3rscan、waymo、nuscenes
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What is the length of the longest dimension (length, width, or
            height) of the stove, measured in centimeters?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">62</div>
        </div>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 199 frames, at frame 26, what is the length of the
            longest dimension (length, width, or height) of a blue sedan in
            region (0.38,0.54,0.70,0.72) [Note: Bounding box region, coordinates
            are normalized (0~1), format (x1,y1,x2,y2) with (0,0)=top-left],
            measured in centimeters? (Note: The frame rate of the video is
            10fps)
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">467</div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="1-2">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        物体属性识别

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：scannet、3rscan
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What is the material of the trash bin?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">Plastic</div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="1-3">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        物体可供性识别

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：arkitscenes、3rscan、scannet
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Base on the video, if i want to make voice calls over traditional
            landline or cellular networks without needing internet or a
            computer, which position allows me to accurately locate the object
            to do it?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">It is near the TV</div>
        </div>
      </div>
    </div>
    <div
      class="qandaItemContainer"
      id="
		2-1"
    >
      <div class="mainTaskBlockTitle">场景理解</div>
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        视觉定位

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：arkitscenes、scannet、3rscan、waymo、nuscenes
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 199 frames, at frame 1, based on the description a
            man wearing a red jacket riding a bicycle, detect the 3D bounding
            box of the described vehicle in the current frame camera coordinate
            system. Camera coordinate: X-axis points rightward, Y-axis points
            downward, and Z-axis points forward. The origin point is the current
            frame camera location. The format of the answer is [x, y, z, l, w,
            h, heading]. Note: (1) x, y, z: the center of the vehicle in the
            coordinate system, in meters. (2) l, w, h: these are defined in the
            vehicle’s local coordinate system, l measures along the vehicle’s
            forward direction, w measures along the vehicle’s left-right
            direction, h measures along the vehicle’s vertical direction, in
            meters. (3) heading: it is the angle in the xz-plane (horizontal
            plane), measured counter-clockwise from the +z axis (camera forward)
            to the projection of the vehicle’s forward direction. It lies
            between (-180, 180). Select the most likely 3D bounding box. (Note:
            The frame rate of the video is 10fps)
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            [-1.58, 0.98, 7.31, 2.02, 1.16, 1.93, 99]
          </div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="2-2">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        面积估计

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：arkitscenes、scannet、scannet++、3rscan
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What is the size of this room (in square meters)? If multiple rooms
            are shown, estimate the size of the combined space.
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">125</div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="2-3">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        绝对距离估计
        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：arkitscenes、scannet、scannet++、3rscan、waymo、nuscenes
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Measuring from the closest point of each object, what is the
            distance between the sofa and the stove (in meters)?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">2.9</div>
        </div>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 199 frames, at frame 31, what is the direct
            distance between a blue sedan and the camera (in meters)? (Note: The
            frame rate of the video is 10fps)
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">15.8</div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="2-4">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        场景类别识别

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：scannet、3rscan
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Which of the following descriptions of the scene in the video is the
            most accurate?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            A living room, one sofa, one bookshelf, and one tv.
          </div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="3-1">
      <div class="mainTaskBlockTitle">空间关系理解</div>
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        物体计数

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：arkitscenes、scannet、scannet++、3rscan
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            How many table(s) are in this video in total.
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">4.0</div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="3-2">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        相对方向

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：arkitscenes、scannet、scannet++、3rscan、waymo、nuscenes
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            If I am standing by the stove and facing the sofa, is the tv to my
            front-left, front-right, back-left, or back-right? The directions
            refer to the quadrants of a Cartesian plane (if I am standing at the
            origin and facing along the positive y-axis).
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">front-left</div>
        </div>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 198 frames, at frame 161, is the white suv in
            region (0.39,0.50,0.45,0.56)[Note: Bounding box region, coordinates
            are normalized (0~1), format (x1,y1,x2,y2) with (0,0)=top-left] to
            the green mini cooper in region (0.43,0.52,0.53,0.65)'s back-right,
            back-left, front-right, or front-left? Assume the front of the green
            mini cooper in region (0.43,0.52,0.53,0.65) is facing directly
            forward. (Note: The frame rate of the video is 10fps)
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">front-left</div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="3-3">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        相对距离

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：arkitscenes、scannet、scannet++、3rscan、waymo、nuscenes
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Measuring from the closest point of each object, which of these
            objects (chair, stool, stove, sofa) is the closest to the tv?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">chair</div>
        </div>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 355 frames, at frame 265, measuring from the
            closest point of each object, which of those objects (a black suv in
            region (0.74,0.51,0.91,0.62)[Note: Bounding box region, coordinates
            are normalized (0~1), format (x1,y1,x2,y2) with (0,0)=top-left],a
            black suv in region (0.10,0.50,0.37,0.68), a black sedan in region
            (0.51,0.53,0.68,0.63), a black sedan in region
            (0.38,0.52,0.49,0.61)) is closest to the camera? (Note: The frame
            rate of the video is 24fps)
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            A black suv in region (0.10,0.50,0.37,0.68)
          </div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="3-4">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        空间状态记忆(长视频)
        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：epic-kitchens、egoschema、video-mme
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            How many table(s) are in this video in total.
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">4.0</div>
        </div>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            If I am standing by the stove and facing the sofa, is the tv to my
            front-left, front-right, back-left, or back-right? The directions
            refer to the quadrants of a Cartesian plane (if I am standing at the
            origin and facing along the positive y-axis).
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">front-left</div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="4-1">
      <div class="mainTaskBlockTitle">时空关系理解</div>
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        出现顺序

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：arkitscenes、scannet、scannet++、3rscan
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What will be the first-time appearance order of the following
            categories in the video: sofa, counter, table, chair?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">Counter, trash bin, sofa, door</div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="4-2">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        动作理解

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：youcook2
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            The video has 6102 frames at 30.0 FPS. What step is shown between
            frame 1768 and frame 2037?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Place the nori down with the textured side up
          </div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="4-3">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        状态变化理解

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：charades-ego
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            The green board is to the right side of the glass, then what
            happened to the position of the glass later?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            It was moved from the right to the left of the dough mixing bowl.
          </div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="5-1">
      <div class="mainTaskBlockTitle">空间推理</div>
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        路径规划

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：arkitscenes、scannet、scannet++、roomtour3d、waymo、nuscenes
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            You are a robot beginning at the bed facing the tv. You want to
            navigate to the toilet. You will perform the following actions
            (Note: for each [please fill in], choose either 'turn back,' 'turn
            left,' or 'turn right.'): 1. Go forward until the TV 2. [please fill
            in] 3. Go forward until the shower 4. [please fill in] 5. Go forward
            until the toilet. You have reached the final destination.
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">Turn Left, Turn Right</div>
        </div>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            You are a robot beginning at hallway1 facing the big glass window.
            You want to navigate to bedroom1. You will perform the following
            actions (Note: for each [please fill in], choose either A, B, C, D,
            E or F): 1. go forward towards the big windows and stop before the
            kitchen island in the kitchen. 2. [please fill in]. 3. go forward
            towards the stove. 4. [please fill in]. 5. go towards the door that
            has a glass beam. 6. [please fill in]. 7. [please fill in]. 8. go
            towards bedroom1 and stop before the bed. You have reached the final
            destination
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Turn Right, Turn Left, Turn Right, Turn Left
          </div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="5-2">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        空间因果预测

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：arkitscenes、scannet、scannet++、waymo、nuscenes
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            The camera is facing directly backward. In which direction is the
            race car moving in the photo?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">Front Left</div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="6-1">
      <div class="mainTaskBlockTitle">时空推理</div>
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        时空因果预测

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：epic-kitchens、waymo、nuscenes
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What happens when a pancake is placed on white paper?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">Its temperature will decrease.</div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="6-2">
      <div class="qandaItemTitle">
        <div class="doubleCircle">
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
          <div class="transCircle"></div>
        </div>
        动态物理预测

        <div class="doubleCircle">
          <div class="transCircle"></div>
          <img class="stripeCircle" src="../assets/icon/circle.png" alt="" />
        </div>
      </div>
      <div class="datasetUsed">
        <div class="datasetIconContainer">
          <img
            class="datasetIcon"
            src="../assets/icon/databaseplus-fill.svg"
            alt=""
          />
        </div>
        所包含数据组：epic-kitchens、waymo、nuscenes
      </div>
      <div class="videoDisplayContainer">
        <video
          muted
          playsinline
          loop
          controls
          disable-picture-in-picture="true"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div class="qanda">
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What violates physical commonsense in the video?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            The direction of the water column formed by the wine flowing from
            the faucet keeps changing, and the water column can be clearly seen
            in the wine glass.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import circ from "../utils/circle.vue";
const scrollTo = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};
</script>

<style scoped>
.contentsContainer {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* flex-direction: column; */
  padding: 5vmax;

  width: 100%;
  height: 80dvh;
  /* height: 100vh; */
  box-sizing: border-box;
}
.circleContainer {
  display: flex;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  margin-left: 10vw;
}
.circleText {
  font-size: 24px;
  font-family: "PS-bold";
}

.connect {
  display: flex;
  position: relative;
  height: 100%;
  width: 7.5vw;
  box-sizing: border-box;
}
.line {
  align-self: center;
  width: 100%;
  height: 2px;
  background-color: #209cee;
}
.horizontolLine {
  display: flex;
  height: 83.75%;
  width: 2px;
  justify-self: center;
  align-self: center;
  box-sizing: border-box;
  background-color: #209cee;
}

.lineGroup {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 25% 0;
  justify-content: space-between;
  box-sizing: border-box;
}
.lineGroup .line {
  width: 100%;
}

.taskContainer {
  display: grid;
  grid-template-columns: 6;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  box-sizing: border-box;
}
.subTaskContainer {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  box-sizing: border-box;
}

.taskItemContainer {
  display: grid;
  grid-template-columns: 100px 1fr 100px 5fr;

  height: 100%;
  align-items: center;
}

.task,
.subTask {
  display: flex;
  height: 1.75vmax;

  justify-content: center;
  align-items: center;
  font-family: "PH-regular";
  border-radius: 20px;
  border: #209cee solid 2px;
  padding: 0.5vmax 1vmax;
  /* margin: 0.5vmax; */
  font-size: 0.8vmax;
  cursor: pointer;
  box-shadow: 2px 4px 2px #83cdff;
}
.task {
  color: #ffffff;
  width: 5vmax;
  background-color: #209cee;
}
.task:hover {
  background-color: #83cdff;
  border: #83cdff solid 2px;
}
.subTask {
  color: #209cee;
  background-color: transparent;
}
.subTask:hover {
  background-color: #def2ff;
}
.subTaskGroup {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 30px;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr; */
}
.qandaContainer {
  display: flex;
  flex-direction: column;
  width: 100%;

  box-sizing: border-box;
  min-height: 100dvh;
  padding-bottom: 10vmax;
}

.mainTaskBlockTitle {
  color: #209cee;
  font-size: 48px;
  font-family: "PH-heavy";
  padding: 5% 15%;
  padding-top: 0;
}

.qandaItemContainer:nth-child(odd) {
  background-color: #f5f5f5;
}
.qandaItemContainer:nth-child(even) {
  background-color: #f0f0f0;
}

.qandaItemContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  padding: 7.5% 15%;
}
.qandaItemTitle {
  display: flex;
  color: #209cee;
  font-family: "PH-bold";
  font-size: 28px;
  gap: 40px;
  justify-content: center;
  align-items: center;
}

.doubleCircle {
  display: flex;
  justify-content: center;
  align-items: center;
}
.stripeCircle {
  width: 40px;
  height: 40px;
}
.transCircle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff99;
  margin: 0 -20px;
  z-index: 2;
}

.datasetUsed {
  display: flex;
  color: #83cdff;
  font-family: "PH-medium";
  font-size: 20px;
  margin-top: 20px;
  text-shadow: #209cee 0px 1px 0.5px;
  align-items: center;
}
.datasetIconContainer {
  display: flex;
  width: 20px;
  height: 20px;
  margin: 0 10px;
  overflow: hidden;
}
.datasetIcon {
  filter: drop-shadow(#209cee -100px 0 0);
  transform: translateX(100px);
}
.videoDisplayContainer {
  display: flex;
  width: 80%;
  margin: 50px 0;
}
video {
  width: 100%;
  aspect-ratio: 16/9;
}
.qanda {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;

  font-family: "PH-regular";
  font-size: 20px;
  margin-top: 50px;
  line-height: 1.5;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 2.5vmax;
  border: #209cee dotted 3px;
}
.qanda > * {
  margin-top: 18px;
}
.stress {
  font-family: "PH-bold";
  color: #209cee;
  font-size: 36px;
  margin-right: 8px;
}

.q,
.a {
  display: grid;
  box-sizing: border-box;
  height: 100%;
}

.a {
  grid-template-columns: 120px 1fr 120px;
  direction: rtl;
}

.q {
  grid-template-columns: 120px 1fr 120px;
}

.tinyTriContainer {
  display: flex;
  width: 120px;
  height: 100%;
  overflow: hidden;
  align-items: center;
}

.qandaIcon {
  display: flex;
  width: 80px;
  aspect-ratio: 1;
}

.tinyTri {
  position: relative;
  width: 30px;
  height: 30px;

  /* top: 0;
  left: 0;
  justify-content: center; */
}
.q .tinyTri {
  transform: translateX(100%) rotate(45deg);
  background-color: #83cdff;
  box-shadow: 4px 4px 2px #00000033;
}

.a .tinyTri {
  transform: translateX(-100%) rotate(45deg);
  background-color: #ffffff;
  box-shadow: 4px 4px 2px #00000033;
}

.textContainer {
  display: flex;
  box-sizing: border-box;
  width: fit-content;
  direction: ltr;
  /* width: 100%; */
  height: 100%;
  border-radius: 10px;
  padding: 1vmax 1.5vmax;
  align-items: center;
  box-shadow: 4px 4px 2px #00000033;
  text-transform: capitalize;
}
.q .textContainer {
  background-color: #83cdff;
}
.a .textContainer {
  background-color: #ffffff;
  justify-content: flex-end;
}
</style>
