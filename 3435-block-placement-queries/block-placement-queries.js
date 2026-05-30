var getResults = function (queries) {
    let coords = [0];

    for (let q of queries) {
        coords.push(q[1]);
    }

    coords = [...new Set(coords)].sort((a, b) => a - b);

    const idx = new Map();
    coords.forEach((v, i) => idx.set(v, i));

    const n = coords.length;

    class SegTree {
        constructor(n) {
            this.n = n;
            this.tree = new Array(4 * n).fill(0);
        }

        update(node, l, r, pos, val) {
            if (l === r) {
                this.tree[node] = val;
                return;
            }

            let mid = (l + r) >> 1;

            if (pos <= mid)
                this.update(node * 2, l, mid, pos, val);
            else
                this.update(node * 2 + 1, mid + 1, r, pos, val);

            this.tree[node] = Math.max(
                this.tree[node * 2],
                this.tree[node * 2 + 1]
            );
        }

        query(node, l, r, ql, qr) {
            if (ql > r || qr < l) return 0;

            if (ql <= l && r <= qr)
                return this.tree[node];

            let mid = (l + r) >> 1;

            return Math.max(
                this.query(node * 2, l, mid, ql, qr),
                this.query(node * 2 + 1, mid + 1, r, ql, qr)
            );
        }
    }

    const seg = new SegTree(n);

    let obstacles = [0];

    const ans = [];

    for (let q of queries) {
        if (q[0] === 1) {
            let x = q[1];

            let l = 0,
                r = obstacles.length;

            while (l < r) {
                let m = (l + r) >> 1;

                if (obstacles[m] < x) l = m + 1;
                else r = m;
            }

            let pos = l;

            let prev = obstacles[pos - 1];
            let next =
                pos < obstacles.length
                    ? obstacles[pos]
                    : null;

            obstacles.splice(pos, 0, x);

            seg.update(
                1,
                0,
                n - 1,
                idx.get(x),
                x - prev
            );

            if (next !== null) {
                seg.update(
                    1,
                    0,
                    n - 1,
                    idx.get(next),
                    next - x
                );
            }
        } else {
            let x = q[1];
            let sz = q[2];

            let p = upperBound(coords, x) - 1;

            let best = seg.query(
                1,
                0,
                n - 1,
                0,
                p
            );

            let l = 0,
                r = obstacles.length;

            while (l < r) {
                let m = (l + r) >> 1;

                if (obstacles[m] <= x) l = m + 1;
                else r = m;
            }

            let last = obstacles[l - 1];

            best = Math.max(best, x - last);

            ans.push(best >= sz);
        }
    }

    return ans;

    function upperBound(arr, target) {
        let l = 0,
            r = arr.length;

        while (l < r) {
            let m = (l + r) >> 1;

            if (arr[m] <= target)
                l = m + 1;
            else
                r = m;
        }

        return l;
    }
};