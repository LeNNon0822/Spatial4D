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

      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectSizeEstimation1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What is the length of the longest dimension (length, width, or
            height) of the sofa, measured in centimeters?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">223cm</div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectSizeEstimation2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What is the length of the longest dimension (length, width, or
            height) of the window, measured in centimeters?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">162cm</div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectSizeEstimation3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 198 frames, at frame 151, what is the length of the
            longest dimension (length, width, or height) of a white sports car,
            measured in centimeters? (Note: The frame rate of the video is
            10fps)
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">490cm</div>
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

      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="../assets/mp4/ObjectAttributeRecognition1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What shape is the target object 'the table which is wooden and
            brown'?
            <div class="optionContainer">
              <span class="option">A</span>: "Square"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Cylindrical"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "U-Shaped"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Round"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">C</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="../assets/mp4/ObjectAttributeRecognition2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What material is it mainly made of the target object ‘the shorter
            table in the room’?
            <div class="optionContainer">
              <span class="option">A</span>: "Stone"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Concrete"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Brick"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Metal"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">D</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="../assets/mp4/ObjectAttributeRecognition3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What material is it mainly made of the target object 'the middle
            chair which is on one side of the table and is facing away from the
            window’?

            <div class="optionContainer">
              <span class="option">A</span>: "Velvet"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Brick"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Stone"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Leather"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">D</span></div>
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
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/ObjectUtility1.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Based on the video, If I want to see computer output such as texts,
            images, videos, etc.., where can I find such an object to achieve my
            purpose?
            <div class="optionContainer">
              <span class="option">A</span>: "Above the couch."
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Near the cabinet."
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Above the door."
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Above the chair."
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">B</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/ObjectUtility2.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Based on the video, If I want to produce a physical paper copy of a
            digital file or document, where can I find such an object to achieve
            my purpose?
            <div class="optionContainer">
              <span class="option">A</span>: "It is above the chair."
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "It is on the office chair."
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "It is near the cabinet."
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "It is above the bookshelf."
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">C</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/ObjectUtility3.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Based on the video, If I want to input text or commands into a
            computer by typing, where can I find such an object to achieve my
            purpose?

            <div class="optionContainer">
              <span class="option">A</span>: "It is on the cabinet."
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "It is above the cabinet."
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "It is on the table."
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "It is above the chair."
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">C</span></div>
        </div>
      </div>
    </div>
    <div class="qandaItemContainer" id="2-1">
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
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/VideoGrounding1.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Detect the 3D bounding box of the toilet. Coordinate System
            Definition: X-axis points rightward, Y-axis points downward, and
            Z-axis points forward, the origin point is the position of the
            camera in the first video frame. The format of the answer is [x, y,
            z, l, w, h, pitch, yaw, roll]. Note: (1) x, y, z: the center of the
            object in the coordinate system, in centimeters. (2) l, w, h: the
            dimensions of the object along the XYZ axes, in centimeters, when
            the rotation angles are zeros. (3) pitch, yaw, roll: Euler angles
            representing rotations around the X, Y, and Z axes, respectively.
            Each angle lies between (0, 360). Select the most likely 3D bounding
            box.

            <div class="optionContainer">
              <span class="option">A</span>: "[-66, -79, 105, 19, 94, 251, 133,
              335, 345]"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "[-30, -104, 305, 56, 40, 46, 226,
              23, 165]"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "[-123, -89, 183, 36, 56, 13, 133,
              335, 345]"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "[-101, -128, 99, 13, 25, 175, 213,
              318, 232]"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">B</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/VideoGrounding2.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 199 frames, at frame 71, based on the description:
            a white delivery truck, detect the 3D bounding box of the described
            vehicle in the current frame camera coordinate system. Camera
            coordinate: X-axis points rightward, Y-axis points downward, and
            Z-axis points forward. The origin point is the current frame camera
            location. The format of the answer is [x, y, z, l, w, h, heading].
            Note: (1) x, y, z: the center of the vehicle in the coordinate
            system, in meters. (2) l, w, h: these are defined in the vehicle’s
            local coordinate system, l measures along the vehicle’s forward
            direction, w measures along the vehicle’s left-right direction, h
            measures along the vehicle’s vertical direction, in meters. (3)
            heading: it is the angle in the xz-plane (horizontal plane),
            measured counter-clockwise from the +z axis (camera forward) to the
            projection of the vehicle’s forward direction. It lies between
            (-180, 180). Select the most likely 3D bounding box. (Note: The
            frame rate of the video is 10fps)
            <div class="optionContainer">
              <span class="option">A</span>: "[-17.18, 0.61, 61.19, 4.41, 2.0,
              1.47, -170]"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "[0.67, -0.09, 71.74, 0.7, 0.74,
              1.54, 13]"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "[20.4, -0.06, 60.69, 0.96, 0.81,
              1.74, -75]"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "[-4.1, -0.41, 40.52, 7.93, 3.13,
              3.45, 119]"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">D</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/VideoGrounding3.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Based on the description: the leftmost chair when facing the
            windows, detect the 3D bounding box of the described chair.
            Coordinate System Definition: X-axis points rightward, Y-axis points
            downward, and Z-axis points forward, the origin point is the
            position of the camera in the first video frame. The format of the
            answer is [x, y, z, l, w, h, pitch, yaw, roll]. Note: (1) x, y, z:
            the center of the object in the coordinate system, in centimeters.
            (2) l, w, h: the dimensions of the object along the XYZ axes, in
            centimeters, when the rotation angles are zeros. (3) pitch, yaw,
            roll: Euler angles representing rotations around the X, Y, and Z
            axes, respectively. Each angle lies between (0, 360). Select the
            most likely 3D bounding box.

            <div class="optionContainer">
              <span class="option">A</span>: "[-69, -24, 256, 253, 232, 50, 211,
              298, 327]"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "[54, 17, 324, 95, 58, 46, 76, 14,
              265]"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "[140, 17, 305, 95, 60, 47, 290,
              14, 265]"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "[121, 69, 125, 230, 148, 88, 300,
              299, 328]"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">B</span></div>
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

      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/RoomSizeEstimation1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
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
          <div class="textContainer">10.5</div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/RoomSizeEstimation2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
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
          <div class="textContainer">24.9</div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/RoomSizeEstimation3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
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
          <div class="textContainer">14.0</div>
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
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectAbsoluteDistance1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 199 frames, at frame 56, what is the direct
            distance between man wearing gray hoodie and black pants talking on
            phone and the camera (in meters)? (Note: The frame rate of the video
            is 10fps)
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">8.0</div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectAbsoluteDistance2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 198 frames, at frame 131, what is the direct
            distance between a boy wearing a blue shirt and black shorts in
            region (0.02,0.62,0.10,0.74)[Note: Bounding box region, coordinates
            are normalized (0~1), format (x1,y1,x2,y2) with (0,0)=top-left] and
            the camera (in meters)? (Note: The frame rate of the video is 10fps)
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">20.2</div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectAbsoluteDistance3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Measuring from the closest point of each object, what is the direct
            distance between the table and the monitor (in meters)?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">1.3</div>
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
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/SceneRecognition1.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Which of the following descriptions of the scene in the video is the
            most accurate?
            <div class="optionContainer">
              <span class="option">A</span>: "An office, three windows, three
              monitors, and two keyboards."
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "A library, three windows, four
              monitors, and three keyboard."
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "An office, fewer windows than
              monitors and three keyboard."
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "An office, more keyboards than
              monitors and three windows."
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">C</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/SceneRecognition2.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Which of the following descriptions of the scene in the video is the
            most accurate?

            <div class="optionContainer">
              <span class="option">A</span>: "A kitchen, five baskets, one
              chair, and one door."
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "A dining room, five baskets, one
              chair, and one door."
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "A kitchen, fewer chairs than doors
              and three baskets."
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "A kitchen, five baskets, two
              chairs, and zero doors."
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">A</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/SceneRecognition3.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Which of the following descriptions of the scene in the video is the
            most accurate?

            <div class="optionContainer">
              <span class="option">A</span>: "A living room, one sofa, three
              windows, and two trash bins."
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "A living room, zero sofas, three
              windows, and one trash bin."
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "A playroom, one sofa, three
              windows, and two trash bins."
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "A living room, fewer trash bins
              than sofas and two windows."
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">A</span></div>
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
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/ObjectCounting1.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            How many monitor(s) are in this video in total?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">3</div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/ObjectCounting2.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            How many table(s) are in this video in total?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">2</div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/ObjectCounting3.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            How many nightstand(s) are in this video in total?
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">2</div>
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

      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectRelativeDirection1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 199 frames, at frame 66, is the white suv in region
            (0.43,0.53,0.56,0.67)[Note: Bounding box region, coordinates are
            normalized (0~1), format (x1,y1,x2,y2) with (0,0)=top-left] to the
            blue sedan in region (0.17,0.56,0.22,0.60)'s back-right, back-left,
            front-right, or front-left? Assume the front of the blue sedan in
            region (0.17,0.56,0.22,0.60) is facing directly forward. (Note: The
            frame rate of the video is 10fps)

            <div class="optionContainer">
              <span class="option">A</span>: "Front-left"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Back-right"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Front-right"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Back-left"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">D</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectRelativeDirection2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            If I am standing by the clock and facing the bookshelf, is the
            counter to my front-left, front-right, back-left, or back-right?
            Directions refer to the quadrants of a Cartesian plane (assuming I
            am at the origin and facing the positive y-axis)?

            <div class="optionContainer">
              <span class="option">A</span>: "Back-left"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Front-right"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Back-right"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Front-left"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">B</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectRelativeDirection3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            If I am standing by the door and facing the suitcase, is the basket
            to my front-left, front-right, back-left, or back-right? Directions
            refer to the quadrants of a Cartesian plane (assuming I am at the
            origin and facing the positive y-axis) ?

            <div class="optionContainer">
              <span class="option">A</span>: "Front-left"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Back-left"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Front-right"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Back-right"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">A</span></div>
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
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectRelativeDistance1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 197 frames, at frame 101, measuring from the
            closest point of each object, which of those objects (a white sedan
            in region (0.59,0.56,0.71,0.64)[Note: Bounding box region,
            coordinates are normalized (0~1), format (x1,y1,x2,y2) with
            (0,0)=top-left],a red sedan in region (0.77,0.56,0.86,0.62), a
            silver sedan in region (0.39,0.59,0.64,0.76), a black sedan in
            region (0.19,0.56,0.37,0.65)) is closest to the camera? (Note: The
            frame rate of the video is 10fps)

            <div class="optionContainer">
              <span class="option">A</span>: "A red sedan in region
              (0.77,0.56,0.86,0.62)"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "A white sedan in region
              (0.59,0.56,0.71,0.64)"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "A silver sedan in region
              (0.39,0.59,0.64,0.76)"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "A black sedan in region
              (0.19,0.56,0.37,0.65)"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">C</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectRelativeDistance2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Measuring from the closest point of each object, which of these
            objects (bookshelf, window, sofa, table) is the closest to the TV?

            <div class="optionContainer">
              <span class="option">A</span>: "Sofa"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Bookshelf"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Table"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Window"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">B</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ObjectRelativeDistance3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Given a video of 197 frames, at frame 61, measuring from the closest
            point of each object, which of those objects (a white volkswagen
            hatchback in region (0.38,0.52,0.46,0.60)[Note: Bounding box region,
            coordinates are normalized (0~1), format (x1,y1,x2,y2) with
            (0,0)=top-left],a silver sedan in region (0.47,0.53,0.67,0.67)) is
            closest to the camera? (Note: The frame rate of the video is 10fps)

            <div class="optionContainer">
              <span class="option">A</span>: "A silver sedan in region
              (0.47,0.53,0.67,0.67)"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "A white volkswagen hatchback in
              region (0.38,0.52,0.46,0.60)"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">A</span></div>
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

      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/SpatialStateMemory1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Before person touching anything at the beginning, which one is
            correct about relative positions from person’s view?
            <div class="optionContainer">
              <span class="option">A</span>: "Black wheels are in front of
              rectangular white base with four holes"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Black wheels are behind
              rectangular white base with four holes"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Grey nuts are right of white
              beams"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Black tires are left of grey
              screws"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">B</span></div>
        </div>
      </div>

      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="../assets/mp4/SpatialStateMemory2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What is the first thing person touched with his left hand?
            <div class="optionContainer">
              <span class="option">A</span>: "Instruction paper"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Black wheel"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "White beam"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "White base"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">D</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="../assets/mp4/SpatialStateMemory3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            How were the fried bull frogs arranged on the plate in the scene
            immediately after the city and name Pampanga was shown? Note: If not
            specified, when asking about positions, directions are relative to
            the perspective of the viewer watching the video.

            <div class="optionContainer">
              <span class="option">A</span>: "They were put in a straight row on
              a long plate."
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "They were put in a circle on a
              round plate."
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "They were stacked on top of each
              other on a plate."
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "They were on a skewer in a tray"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">C</span></div>
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
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/AppearanceOrder1.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What will be the first-time appearance order of the following
            categories in the video: microwave, towel, table, basket?
            <div class="optionContainer">
              <span class="option">A</span>: "Microwave, basket, table, towel"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Table, towel, basket, microwave"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Microwave, towel, table, basket"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Microwave, towel, basket, table"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">D</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/AppearanceOrder2.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What will be the first-time appearance order of the following
            categories in the video: TV, pillow, mirror, table?
            <div class="optionContainer">
              <span class="option">A</span>: "Table, pillow, TV, mirror"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Mirror, table, TV, pillow"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Table, pillow, mirror, TV"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "TV, mirror, table, pillow"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">A</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/AppearanceOrder3.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What will be the first-time appearance order of the following
            categories in the video: door, lamp, table, TV?

            <div class="optionContainer">
              <span class="option">A</span>: "Door, table, lamp, TV"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Lamp, door, table, TV"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Door, table, TV, lamp"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Door, lamp, TV, table"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">A</span></div>
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
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ActionRecognition1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            The video has 10633 frames at 30.0 FPS. What step is shown between
            frame 6683 and frame 8241?
            <div class="optionContainer">
              <span class="option">A</span>: "Mix butter and flour in a pan"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Combine macaroni sauce and cheese"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Add half-and-half and keep
              stirring"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Strain macaroni and rinse it with
              cold water"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">D</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ActionRecognition2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            The video has 7346 frames at 30.0 FPS. What step is shown between
            frame 4495 and frame 5904?

            <div class="optionContainer">
              <span class="option">A</span>: "Roll the rice and place salmon on
              top"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Slice salmon into thin pieces"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Shape rice with hands and place
              sushi on top"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Press the salmon and rice"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">C</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/ActionRecognition3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            Which of the following is the correct temporal order of these steps?

            <div class="optionContainer">
              <span class="option">A</span>: "Fry the ham peppers and onions in
              a pan -> add quinoa water and salt to a pot -> add garlic to the
              pan -> add green onion to the pan"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Add quinoa water and salt to a pot
              -> fry the ham peppers and onions in a pan -> add garlic to the
              pan -> add green onion to the pan"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Add quinoa water and salt to a pot
              -> fry the ham peppers and onions in a pan -> add green onion to
              the pan -> add garlic to the pan"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Add quinoa water and salt to a pot
              -> add garlic to the pan -> fry the ham peppers and onions in a
              pan -> add green onion to the pan"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">B</span></div>
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

      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/StateChangeUnderstanding1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What happened to the person’s grey shirt?

            <div class="optionContainer">
              <span class="option">A</span>: "He took it off and put on a shirt
              with a picture."
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "He put a picture on top of his
              shirt."
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "He wore a grey shirt with picture
              the entire time."
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "The person did not wear a grey
              shirt."
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">C</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/StateChangeUnderstanding2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            What happened to the broom?

            <div class="optionContainer">
              <span class="option">A</span>: "The person held it the entire
              time."
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "The person first held it, then put
              it on the couch."
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "The person first held it and then
              dropped it on the floor."
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "There is no broom in the video."
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">A</span></div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source
              src="@/assets/mp4/StateChangeUnderstanding3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            How many new boxes did the person put in the pantry?

            <div class="optionContainer">
              <span class="option">A</span>: "Three."
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Two."
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "One."
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Four."
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer"><span class="option">A</span></div>
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

      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/RoutePlanning1.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            You are a robot beginning at livingroom1 facing the kitchen. You
            want to navigate to livingroom3. You will perform the following
            actions (Note: for each [please fill in], choose either A, B, C, D
            or E): 1. go towards the kitchen. 2. [please fill in]. 3. go towards
            the couch. 4. [please fill in]. 5. go forward. 6. go through the
            door. 7. go forward towards the navy sofa. You have reached the
            final destination.

            <div class="optionContainer">
              <span class="option">A</span>: "Turn left"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Turn right"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Turn 180 degrees"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Go upstairs"
            </div>
            <div class="optionContainer">
              <span class="option">E</span>: "Go downstairs"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            <span class="option">['A', 'B'] </span>
          </div>
        </div>
      </div>
      <div class="qanda">
        <div class="videoDisplayContainer">
          <video playsinline loop controls disable-picture-in-picture="true">
            <source src="@/assets/mp4/RoutePlanning2.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="q">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            You are a robot beginning at terrace1 facing the pool. You want to
            navigate to bedroom1. You will perform the following actions (Note:
            for each [please fill in], choose either A, B, C, D or E): 1. turn
            180 degrees. 2. go straight towards the microwave. 3. turn right. 4.
            [please fill in]. 5. go forward past the dining table on the left.
            6. go forward. 7. [please fill in]. You have reached the final
            destination.
            <div class="optionContainer">
              <span class="option">A</span>: "Turn left"
            </div>
            <div class="optionContainer">
              <span class="option">B</span>: "Turn right"
            </div>
            <div class="optionContainer">
              <span class="option">C</span>: "Turn 180 degrees"
            </div>
            <div class="optionContainer">
              <span class="option">D</span>: "Go upstairs"
            </div>
            <div class="optionContainer">
              <span class="option">E</span>: "Go downstairs"
            </div>
          </div>
        </div>
        <div class="a">
          <div class="tinyTriContainer">
            <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
            <div class="tinyTri"></div>
          </div>
          <div class="textContainer">
            <span class="option"> ['A', 'A']</span>
          </div>
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
    <div class="qanda">
      <div class="imgGroupContainer">
        <div class="imgContainer">
          <img src="@/assets/img/SpatialCausalPrediction1-1.png" alt="" />
        </div>
        <div class="imgContainer">
          <img src="@/assets/img/SpatialCausalPrediction1-2.png" alt="" />
        </div>
        <div class="imgContainer">
          <img src="@/assets/img/SpatialCausalPrediction1-3.png" alt="" />
        </div>
      </div>
      <div class="q">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          Based on the continuous images, in which direction is the camera
          moving?

          <div class="optionContainer">
            <span class="option">A</span>: "Left"
          </div>
          <div class="optionContainer">
            <span class="option">B</span>: "Right"
          </div>
          <div class="optionContainer">
            <span class="option">C</span>: "Front"
          </div>
          <div class="optionContainer">
            <span class="option">D</span>: "Rear"
          </div>
        </div>
      </div>
      <div class="a">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          <span class="option">C</span>
        </div>
      </div>
    </div>

    <div class="qanda">
      <div class="imgGroupContainer">
        <div class="imgContainer">
          <img src="@/assets/img/SpatialCausalPrediction2-1.png" alt="" />
        </div>
        <div class="imgContainer">
          <img src="@/assets/img/SpatialCausalPrediction2-2.png" alt="" />
        </div>
      </div>
      <div class="q">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          With the camera facing backward, in which direction is the white truck
          moving?

          <div class="optionContainer">
            <span class="option">A</span>: "Left"
          </div>
          <div class="optionContainer">
            <span class="option">B</span>: "Right"
          </div>
          <div class="optionContainer">
            <span class="option">C</span>: "Front"
          </div>
          <div class="optionContainer">
            <span class="option">D</span>: "Rear"
          </div>
        </div>
      </div>
      <div class="a">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          <span class="option">C</span>
        </div>
      </div>
    </div>
    <div class="qanda">
      <div class="imgGroupContainer">
        <div class="imgContainer">
          <img src="@/assets/img/SpatialCausalPrediction3-1.png" alt="" />
        </div>
        <div class="imgContainer">
          <img src="@/assets/img/SpatialCausalPrediction3-2.png" alt="" />
        </div>
        <div class="imgContainer">
          <img src="@/assets/img/SpatialCausalPrediction3-3.png" alt="" />
        </div>
      </div>
      <div class="q">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          Which direction is the toilet relative to me when I am taking image 1?

          <div class="optionContainer">
            <span class="option">A</span>: "Front left"
          </div>
          <div class="optionContainer">
            <span class="option">B</span>: "Front right"
          </div>
          <div class="optionContainer">
            <span class="option">C</span>: "Behind left"
          </div>
          <div class="optionContainer">
            <span class="option">D</span>: "Behind right"
          </div>
        </div>
      </div>
      <div class="a">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          <span class="option">A</span>
        </div>
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
    <div class="qanda">
      <div class="videoDisplayContainer">
        <video playsinline loop controls disable-picture-in-picture="true">
          <source
            src="@/assets/mp4/Space-TimeCausalPrediction1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="q">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          What is the person going to do?

          <div class="optionContainer">
            <span class="option">A</span>: "He will sit down and wait without
            using the machine."
          </div>
          <div class="optionContainer">
            <span class="option">B</span>: "He will pour laundry detergent on
            top of his clothes."
          </div>
          <div class="optionContainer">
            <span class="option">C</span>: "He will put his card into the
            laundry machine’s slot and press the buttons."
          </div>
          <div class="optionContainer">
            <span class="option">D</span>: "He will use the blue machine to
            check his balance."
          </div>
        </div>
      </div>
      <div class="a">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          <span class="option">C</span>
        </div>
      </div>
    </div>
    <div class="qanda">
      <div class="videoDisplayContainer">
        <video playsinline loop controls disable-picture-in-picture="true">
          <source
            src="@/assets/mp4/Space-TimeCausalPrediction2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="q">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          What is the person going to do?
          <div class="optionContainer">
            <span class="option">A</span>: "He will wash the vegetables in the
            sink."
          </div>
          <div class="optionContainer">
            <span class="option">B</span>: "He will place the plate back into
            the refrigerator."
          </div>
          <div class="optionContainer">
            <span class="option">C</span>: "He will start cutting the vegetables
            on the counter."
          </div>
          <div class="optionContainer">
            <span class="option">D</span>: "He will sharpen the knife."
          </div>
        </div>
      </div>
      <div class="a">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          <span class="option">A </span>
        </div>
      </div>
    </div>
    <div class="qanda">
      <div class="videoDisplayContainer">
        <video playsinline loop controls disable-picture-in-picture="true">
          <source
            src="@/assets/mp4/Space-TimeCausalPrediction3.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="q">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          What is the person going to do?

          <div class="optionContainer">
            <span class="option">A</span>: "He will place the onion pieces back
            on the cutting board."
          </div>
          <div class="optionContainer">
            <span class="option">B</span>: "He will throw the onion scraps into
            the trash can."
          </div>
          <div class="optionContainer">
            <span class="option">C</span>: "He will wash the onion under running
            water."
          </div>
          <div class="optionContainer">
            <span class="option">D</span>: "He will add the onion pieces into
            the salad bowl."
          </div>
        </div>
      </div>
      <div class="a">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          <span class="option">B</span>
        </div>
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
    <div class="qanda">
      <div class="videoDisplayContainer">
        <video playsinline loop controls disable-picture-in-picture="true">
          <source
            src="@/assets/mp4/DynamicPhysicalPrediction1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="q">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          Which option violates physical common sense the most in this video?
          <div class="optionContainer">
            <span class="option">A</span>: "The rider’s leg appears fused with
            the scooter handle."
          </div>
          <div class="optionContainer">
            <span class="option">B</span>: "The scooter rolls forward while both
            wheels remain perfectly still."
          </div>
          <div class="optionContainer">
            <span class="option">C</span>: "The scooter’s shadow peels off the
            ground and climbs the wall."
          </div>
          <div class="optionContainer">
            <span class="option">D</span>: "The rider and scooter briefly
            levitate together above the pavement."
          </div>
        </div>
      </div>
      <div class="a">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          <span class="option">A</span>
        </div>
      </div>
    </div>
    <div class="qanda">
      <div class="videoDisplayContainer">
        <video playsinline loop controls disable-picture-in-picture="true">
          <source
            src="@/assets/mp4/DynamicPhysicalPrediction2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="q">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          Which option violates physical common sense the most in this video?
          <div class="optionContainer">
            <span class="option">A</span>: "The bottle pours upward from the
            cup, refilling itself without contact."
          </div>
          <div class="optionContainer">
            <span class="option">B</span>: "The cup fills while turned upside
            down with no liquid pooling beneath it."
          </div>
          <div class="optionContainer">
            <span class="option">C</span>: "The cup fills earlier than how it
            should be."
          </div>
          <div class="optionContainer">
            <span class="option">D</span>: "The bottle neck passes through the
            cup wall without collision or deformation."
          </div>
        </div>
      </div>
      <div class="a">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          <span class="option">C </span>
        </div>
      </div>
    </div>
    <div class="qanda">
      <div class="videoDisplayContainer">
        <video playsinline loop controls disable-picture-in-picture="true">
          <source
            src="@/assets/mp4/DynamicPhysicalPrediction3.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="q">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleBlue.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          Which option violates physical common sense the most in this video?

          <div class="optionContainer">
            <span class="option">A</span>: "When tapped, the bottle’s shape
            changes. "
          </div>
          <div class="optionContainer">
            <span class="option">B</span>: "The bottle teleports a half meter to
            the side between frames while the hand remains continuous."
          </div>
          <div class="optionContainer">
            <span class="option">C</span>: "Sound from the tap causes the liquid
            inside to levitate and form a rigid column."
          </div>
          <div class="optionContainer">
            <span class="option">D</span>: "The bottle mouth seals itself after
            being opened, with no observable mechanism."
          </div>
        </div>
      </div>
      <div class="a">
        <div class="tinyTriContainer">
          <img class="qandaIcon" src="@/assets/icon/bubbleRed.png" alt="" />
          <div class="tinyTri"></div>
        </div>
        <div class="textContainer">
          <span class="option">A</span>
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
import "vue3-video-play/dist/style.css";
import { reactive } from "vue";
console.log;
const options = reactive({
  width: "800px", //播放器宽度
  height: "450px", //播放器高度
  color: "#409eff", //主题色
  title: "", //视频名称
  src: "@/assets/mp4/cover_demo.mp4", //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});
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
  justify-content: center;
  width: 80%;
  padding: 0 10%;
  margin: 50px 0;
}
video {
  max-width: min(800px, 90%);
  max-height: 540px;
  border-radius: 12px;
  /* aspect-ratio: 16/9; */
}
.imgGroupContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  /* max-width: min(800px, 90%); */
  padding: 0 5%;
  margin: 50px 0;
  gap: 20px;
  /* row-gap: 20px;
  column-gap: 20px;
  grid-template-areas:
    "a b"
    "c c"; */
}
.imgContainer {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.qanda {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;

  font-family: "PH-regular";
  font-size: 16px;
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
  flex-direction: column;
  box-sizing: border-box;
  width: fit-content;
  direction: ltr;
  /* width: 100%; */
  height: 100%;
  border-radius: 10px;
  padding: 1vmax 2.5vmax;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 4px 4px 2px #00000033;
  /* text-transform: capitalize; */
}

.optionContainer {
}
.option {
  font-family: "PH-bold";
  font-size: 20px;
}

.q .textContainer {
  background-color: #83cdff;
}
.a .textContainer {
  background-color: #ffffff;
  justify-content: center;
}
</style>
